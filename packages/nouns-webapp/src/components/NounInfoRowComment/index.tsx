import { BigNumber } from '@ethersproject/bignumber';
import React, { useEffect, useState } from 'react';
import { isNounderNoun, isNounsDAONoun } from '../../utils/nounderNoun';

import classes from './NounInfoRowComment.module.css';
import _CommentIcon from '../../assets/icons/Comment.svg';
import _HeartIcon from '../../assets/icons/Heart.svg';

import { Image } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { bidsByAuctionQueryForWinningBid } from '../../wrappers/subgraph';
import { useAppSelector } from '../../hooks';
import CommentModal from '../CommentModal';

interface NounInfoRowCommentProps {
  nounId: number;
}
// TODO: badwords filter on comments

const NounInfoRowComment: React.FC<NounInfoRowCommentProps> = props => {
  const { nounId } = props;
  const isCool = useAppSelector(state => state.application.isCoolBackground);
  const { loading, error, data } = useQuery(bidsByAuctionQueryForWinningBid(nounId.toString()));

  const [displayedComment, setDisplayedComment] = useState('');
  const [showCommentModal, setShowCommentModal] = useState(false);
  const showCommentModalHandler = () => setShowCommentModal(true);
  const dismissCommentModalHanlder = () => setShowCommentModal(false);

  const isBurned = data ? data.bids.length === 0 : true;
  const isRewardOrBurned =
    isNounderNoun(BigNumber.from(nounId)) || isNounsDAONoun(BigNumber.from(nounId)) || isBurned;

  const winner = !isRewardOrBurned && data ? data.bids[0].noun.owner.id : 'null';
  const comment = !isRewardOrBurned && data ? data.bids[0].comment : 'null';

  useEffect(() => {
    if (!comment) return;

    if (comment.length > 20) {
      let truncComment = comment.substring(0, 20);

      // check the next character, if it is not a space, go back to previous space
      if (comment.length > 20 && comment[20] !== ' ') {
        truncComment = truncComment.substring(0, truncComment.lastIndexOf(' '));
      }
      // add ellipsis
      setDisplayedComment(truncComment + '..');
    } else {
      setDisplayedComment(comment);
    }
  }, [comment]);

  if (loading) {
    return (
      <div className={classes.nounHolderInfoContainer}>
        <span className={classes.nounHolderLoading}>Loading...</span>
      </div>
    );
  }

  if (error) {
    return <div>Failed to fetch noun info</div>;
  }

  return (
    <>
      {showCommentModal && (
        <CommentModal onDismiss={dismissCommentModalHanlder} bidder={winner} comment={comment} />
      )}
      {!isRewardOrBurned ? (
        <div className={classes.commentInfoContainer}>
          <span>
            <Image src={_CommentIcon} className={classes.commentIcon} />
          </span>
          Comment
          {comment.length > 13 ? (
            <span
              onClick={showCommentModalHandler}
              className={isCool ? classes.linkCool : classes.linkWarm}
            >
              {`"${displayedComment}"`}
            </span>
          ) : (
            <span className={classes.nounInfoRowComment}>{`"${displayedComment}"`}</span>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default NounInfoRowComment;

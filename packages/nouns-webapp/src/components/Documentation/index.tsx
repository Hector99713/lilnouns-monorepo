import Section from '../../layout/Section';
import { Col } from 'react-bootstrap';
import classes from './Documentation.module.css';
import Accordion from 'react-bootstrap/Accordion';
import Link from '../Link';

//TODO: update copy
const Documentation = () => {
  const cryptopunksLink = (
    <Link text="CryptoPunks" url="https://www.larvalabs.com/cryptopunks" leavesPage={true} />
  );
  const playgroundLink = <Link text="Playground" url="/playground" leavesPage={false} />;
  const publicDomainLink = (
    <Link
      text="public domain"
      url="https://creativecommons.org/publicdomain/zero/1.0/"
      leavesPage={true}
    />
  );
  const compoundGovLink = (
    <Link text="Compound Governance" url="https://compound.finance/governance" leavesPage={true} />
  );
  return (
    <Section fullWidth={false}>
      <Col lg={{ span: 10, offset: 1 }}>
        <div className={classes.headerWrapper}>
          <h1>WTF?</h1>
          <p className={classes.aboutText}>
            Lil Nouns are an experimental attempt to improve the formation of on-chain avatar
            communities. While projects such as {cryptopunksLink} have attempted to bootstrap
            digital community and identity, Lil Nouns attempt to bootstrap identity, community,
            governance, and a treasury that can be used by the community.
          </p>
          <p className={classes.aboutText} style={{ paddingBottom: '4rem' }}>
            Learn more below, or start creating Lil Nouns off-chain using the {playgroundLink}.
          </p>
        </div>
        <Accordion flush>
          <Accordion.Item eventKey="0" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>Summary</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Lil Nouns artwork is in the {publicDomainLink}.</li>
                <li>One Lil Noun is trustlessly auctioned every 24 hours, forever.</li>
                <li>100% of Lil Noun auction proceeds are trustlessly sent to the treasury.</li>
                <li>Settlement of one auction kicks off the next.</li>
                <li>All Lil Nouns are members of Lil Nouns DAO.</li>
                <li>Lil Nouns DAO uses Nouns DAO's fork of {compoundGovLink}.</li>
                <li>One Lil Noun is equal to one vote.</li>
                <li>The treasury is controlled exclusively by Lil Nouns via governance.</li>
                <li>Artwork is generative and stored directly on-chain (not IPFS).</li>
                <li>
                  No explicit rules exist for attribute scarcity; all Lil Nouns are equally rare.
                </li>
                <li>
                  Lil Nounders receive rewards in the form of Lil Nouns (10% of supply for first 5
                  years).
                </li>
                <li>
                  NounsDAO receives rewards in the form of Lil Nouns (10% of supply for first 5
                  years).
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>Daily Auctions</Accordion.Header>
            <Accordion.Body>
              <p className={classes.aboutText}>
                The Lil Nouns Auction Contract will act as a self-sufficient Lil Noun generation and
                distribution mechanism, auctioning one Lil Noun every 24 hours, forever. 100% of auction
                proceeds (ETH) are automatically deposited in the Lil Nouns DAO treasury, where they
                are governed by Lil Noun owners.
              </p>

              <p className={classes.aboutText}>
                Each time an auction is settled, the settlement transaction will also cause a new
                Lil Noun to be minted and a new 24 hour auction to begin.{' '}
              </p>
              <p>
                While settlement is most heavily incentivized for the winning bidder, it can be
                triggered by anyone, allowing the system to trustlessly auction Lil Nouns as long as
                Ethereum is operational and there are interested bidders.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>Lil Nouns DAO</Accordion.Header>
            <Accordion.Body>
              Lil Nouns DAO utilizes Nouns DAO's fork of {compoundGovLink} and is the main governing body of
              the Lil Nouns ecosystem. The Lil Nouns DAO treasury receives 100% of ETH proceeds from
              daily Lil Noun auctions. Each Lil Noun is an irrevocable member of Lil Nouns DAO and entitled
              to one vote in all governance matters. Noun votes are non-transferable (if you sell
              your Lil Noun the vote goes with it) but delegatable, which means you can assign your vote
              to someone else as long as you own your Lil Noun.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              Governance ‘Slow Start’
            </Accordion.Header>
            <Accordion.Body>
              <p>
                In addition to the precautions taken by Compound Governance, Lil Nounders have given
                themselves a special veto right to ensure that no malicious proposals can be passed
                while the Lil Noun supply is low. This veto right will only be used if an obviously
                harmful governance proposal has been passed, and is intended as a last resort.
              </p>
              <p>
                Lil Nounders will proveably revoke this veto right when they deem it safe to do so. This
                decision will be based on a healthy Lil Noun distribution and a community that is
                engaged in the governance process.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>Lil Noun Traits</Accordion.Header>
            <Accordion.Body>
              <p>
                Lil Nouns are generated randomly based Ethereum block hashes. There are no 'if'
                statements or other rules governing Lil Noun trait scarcity, which makes all Lil Nouns
                equally rare. As of this writing, Lil Nouns are made up of:
              </p>
              <ul>
                <li>backgrounds (2) </li>
                <li>bodies (30)</li>
                <li>accessories (137) </li>
                <li>heads (234) </li>
                <li>glasses (21)</li>
              </ul>
              You can experiment with off-chain Lil Noun generation at the {playgroundLink}.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              On-Chain Artwork
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Lil Nouns are stored directly on Ethereum and do not utilize pointers to other
                networks such as IPFS. This is possible because Lil Noun parts are compressed and stored
                on-chain using a custom run-length encoding (RLE), which is a form of lossless
                compression.
              </p>

              <p>
                The compressed parts are efficiently converted into a single base64 encoded SVG
                image on-chain. To accomplish this, each part is decoded into an intermediate format
                before being converted into a series of SVG rects using batched, on-chain string
                concatenation. Once the entire SVG has been generated, it is base64 encoded.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              Lil Noun Seeder Contract
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The Lil Noun Seeder contract is used to determine Lil Noun traits during the minting
                process. The seeder contract can be replaced to allow for future trait generation
                algorithm upgrades. Additionally, it can be locked by the Lil Nouns DAO to prevent
                any future updates. Currently, Lil Noun traits are determined using pseudo-random number
                generation:
              </p>
              <code>keccak256(abi.encodePacked(blockhash(block.number - 1), nounId))</code>
              <br />
              <br />
              <p>
                Trait generation is not truly random. Traits can be predicted when minting a Lil Noun on
                the pending block.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              Lil Nounder's Reward
            </Accordion.Header>
            <Accordion.Body>
              <p>
                'Lil Nounders' are the group of builders that initiated Lil Nouns. Here are the
                Lil Nounders:
              </p>
              <ul>
                <li>
                  <Link text="@0xsvg" 
                  url="https://twitter.com/0xsvg" 
                  leavesPage={true} 
                  />
                </li>
                <li>
                  <Link
                    text="@adelidusiam"
                    url="https://twitter.com/adelidusiam"
                    leavesPage={true}
                  />
                </li>
              </ul>
              <p>
                Because 100% of Lil Noun auction proceeds are sent to Lil Nouns DAO, Lil Nounders have
                chosen to compensate themselves with Lil Nouns. Every 10th Lil Noun for the first 5
                years of the project (Lil Noun ids #0, #10, #20, #30 and so on) will be automatically
                sent to the Lil Nounder's multisig to be vested and shared among the founding
                members of the project.
              </p>
              <p>
                Lil Nounder distributions don't interfere with the cadence of 24 hour auctions. Lil
                Nouns are sent directly to the Lil Nounder's Multisig, and auctions continue on schedule
                with the next available Lil Noun ID.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              NounsDAO's Reward
              </Accordion.Header>
            <Accordion.Body>
              <p>
                For being selfless stewards of cc0, Lil Nounders chosen to 
                chosen to compensate the NounsDAO with Lil Nouns. Every 11th Lil Noun for the first 5
                years of the project (Lil Noun ids #1, #11, #21, #31 and so on) will be automatically
                sent to the NounsDAO to be vested and shared among members of the project.
              </p>
              <p>
                NounsDAO distributions don't interfere with the cadence of 24 hour auctions. Lil
                Nouns are sent directly to the NoundDAO Treasry, and auctions
                continue on schedule with the next available Lil Noun ID.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Section>
  );
};
export default Documentation;

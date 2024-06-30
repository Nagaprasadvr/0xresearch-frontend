import { Button } from "@/components/CustomComponents/Button";
import { Card } from "@/components/CustomComponents/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-5">
      <h1 className="mb-2 text-4xl md:text-5xl heading">
        Welcome to OxPublish
      </h1>
      <p className="text-lg font-bold">
        Empowering Research Publishing on Solana and Arweave
      </p>

      <div className="flex flex-col gap-2 m-h-100 lg:w-3/4 w-full">
        <h2 className=" text-2xl md:text-3xl font-semibold">
          Why Choose OxPublish?
        </h2>
        <ul className="md:grid md:grid-cols-2 gap-5 flex flex-col">
          <Card>
            <li className="gap-2 flex flex-col">
              <div className="flex flex-row gap-2">
                <Image
                  src="/solana-sol-logo.svg"
                  width={30}
                  height={30}
                  alt="solana-logo"
                  style={{
                    maxWidth: "40px",
                    maxHeight: "40px",
                  }}
                />
                <div className="font-bold text-3xl">
                  Solana-Powered Scalability
                </div>
              </div>
              <div className="text-xl font-bold">
                Harnessing the speed and scalability of Solana blockchain for
                lightning-fast transactions.
              </div>
            </li>
          </Card>
          <Card>
            <li className="gap-2 flex flex-col">
              <div className="flex flex-row gap-2">
                <Image
                  src="/arweave-ar-logo.svg"
                  width={40}
                  height={40}
                  alt="solana-logo"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    maxWidth: "40px",
                    maxHeight: "40px",
                  }}
                />
                <div className="font-bold text-3xl">
                  Arweave&apos;s Permanent Storage
                </div>
              </div>
              <div className="text-xl font-bold">
                Leveraging Arweave&apos;s decentralized storage for tamper-proof
                archival of research papers.
              </div>
            </li>
          </Card>
          <Card>
            <li className="gap-2 flex flex-col">
              <div className="flex flex-row gap-2">
                <Image
                  src="/cryptocurrency.png"
                  width={40}
                  height={40}
                  alt="solana-logo"
                  style={{
                    maxWidth: "40px",
                    maxHeight: "40px",
                  }}
                />
                <div className="font-bold text-3xl">Tokenized Incentives</div>
              </div>
              <div className="text-xl font-bold">
                Earn tokens for contributing quality research, fostering a fair
                and incentivized ecosystem.
              </div>
            </li>
          </Card>
          <Card>
            <li className="gap-2 flex flex-col">
              <div className="flex flex-row gap-2">
                <Image
                  src="/network.png"
                  width={40}
                  height={40}
                  alt="solana-logo"
                  style={{
                    maxWidth: "40px",
                    maxHeight: "40px",
                  }}
                />
                <div className="font-bold text-3xl">
                  Decentralized Governance
                </div>
              </div>
              <div className="text-xl font-bold">
                Participate in community-driven decision-making for transparent
                platform development.
              </div>
            </li>
          </Card>
          <Card className="col-span-2">
            <li className="gap-2 flex flex-col">
              <div className="flex flex-row gap-2">
                <Image
                  src="/request.png"
                  width={40}
                  height={40}
                  alt="solana-logo"
                  style={{
                    maxWidth: "40px",
                    maxHeight: "40px",
                  }}
                />
                <div className="font-bold text-3xl">Global Accessibility</div>
              </div>
              <div className="text-xl font-bold">
                Low transaction fees and decentralized hosting for universal
                access to research papers.
              </div>
            </li>
          </Card>
        </ul>
      </div>

      <p className="text-lg mb-6 w-full md:w-1/2 md:text-center font-bold">
        Join us in revolutionizing research publishing. Explore cutting-edge
        research, share your insights, and be part of a decentralized future
        with Øxpublish on Solana and Arweave.
      </p>

      <Button>Lets Start</Button>
    </div>
  );
}

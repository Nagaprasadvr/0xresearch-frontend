import { Button } from "@/components/CustomComponents/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 p-5">
      <h1 className="mb-2 text-4xl md:text-5xl heading">
        Welcome to OxPublish
      </h1>
      <p className="text-lg mb-4">
        Empowering Research Publishing on Solana and Arweave
      </p>

      <div className="flex flex-col gap-2">
        <h2 className="mb-4 text-2xl md:text-3xl font-semibold">
          Why Choose OxPublish?
        </h2>
        <ul>
          <li className="mb-4 gap-2 flex flex-col">
            <div className="flex flex-row gap-2">
              <Image
                src="/solana-sol-logo.svg"
                width={30}
                height={30}
                alt="solana-logo"
              />
              <div className="font-bold text-3xl">
                Solana-Powered Scalability
              </div>
            </div>
            <div className="text-xl">
              Harnessing the speed and scalability of Solana blockchain for
              lightning-fast transactions.
            </div>
          </li>
          <li className="mb-4 gap-2 flex flex-col">
            <div className="flex flex-row gap-2">
              <Image
                src="/arweave-ar-logo.svg"
                width={40}
                height={40}
                alt="solana-logo"
                style={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                }}
              />
              <div className="font-bold text-3xl">
                Arweave's Permanent Storage
              </div>
            </div>
            <div className="text-xl">
              Leveraging Arweave's decentralized storage for tamper-proof
              archival of research papers.
            </div>
          </li>
          <li className="mb-4 gap-2 flex flex-col">
            <div className="flex flex-row gap-2">
              <Image
                src="/cryptocurrency.png"
                width={40}
                height={40}
                alt="solana-logo"
              />
              <div className="font-bold text-3xl">Tokenized Incentives</div>
            </div>
            <div className="text-xl">
              Earn tokens for contributing quality research, fostering a fair
              and incentivized ecosystem.
            </div>
          </li>
          <li className="mb-4 gap-2 flex flex-col">
            <div className="flex flex-row gap-2">
              <Image
                src="/network.png"
                width={40}
                height={40}
                alt="solana-logo"
              />
              <div className="font-bold text-3xl">Decentralized Governance</div>
            </div>
            <div className="text-xl">
              Participate in community-driven decision-making for transparent
              platform development.
            </div>
          </li>
          <li className="mb-4 gap-2 flex flex-col">
            <div className="flex flex-row gap-2">
              <Image
                src="/request.png"
                width={40}
                height={40}
                alt="solana-logo"
              />
              <div className="font-bold text-3xl">Global Accessibility</div>
            </div>
            <div className="text-xl">
              Low transaction fees and decentralized hosting for universal
              access to research papers.
            </div>
          </li>
        </ul>
      </div>

      <p className="text-lg mb-6 w-full md:w-1/2 md:text-center">
        Join us in revolutionizing research publishing. Explore cutting-edge
        research, share your insights, and be part of a decentralized future
        with Øxpublish on Solana and Arweave.
      </p>

      <Button>Lets Start</Button>
    </div>
  );
}

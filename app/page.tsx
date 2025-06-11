import { DockDemo } from "@/app/component/dock";
import Hero from "@/app/component/hero";
import MaxWidthContainer from "@/app/component/maxwidthcontainer";
import ProofOfWork from "@/app/component/proofofwork";
import Skill from "@/app/component/skils";

export default function Home() {
  return (
    <MaxWidthContainer>
    <Hero/>
    <ProofOfWork/>
    <Skill/>
    <DockDemo/>
    </MaxWidthContainer>
  );
}

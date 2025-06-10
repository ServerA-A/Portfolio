import { DockDemo } from "@/component/dock";
import Hero from "@/component/hero";
import MaxWidthContainer from "@/component/maxwidthcontainer";
import ProofOfWork from "@/component/proofofwork";
import Skill from "@/component/skils";

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

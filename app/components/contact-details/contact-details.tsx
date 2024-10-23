import Link from "next/link";
import Image from "next/image";
import { ContactDetails as t } from '@/utils/resourceContent';

export default function ContactDetails() {
    return (
        <>
            <div id="contact-info-section" className="pt-20 mt-[-80px]"></div>
            <section aria-labelledby="title-contact-info" className="bg-[#191d3c] mt-24 flex flex-col h-full w-full bg-portfolio bg-cover bg-bottom text-stone-100 lg:rounded-lg page-width pb-6 pt-6">
                <h2 id="title-contact-info" className="text-5xl pb-8">{t.title}</h2>
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-between  pb-4 sm:pb-8">
                    <dl>
                        <dt className="text-xl">{t.email}</dt>
                        <dd className="text-sm"><a href="mailto:your.email@example.com">mlsloynaz@gmail.com</a></dd>
                        <dt className="text-xl pt-4 pb-1">{t.social}</dt>
                        <dd className="flex gap-4">
                            <Link href="https://github.com/mlsloynaz"><Image src="images/skills/github-white.svg" alt={t.a11yGoToGitHub} width={30} height={30} /></Link>
                            <Link href="https://www.linkedin.com/in/maria-lourdes-sierra-loynaz-b907b58b"><Image src="images/skills/linkedin-white.svg" width={30} height={30} alt={t.a11yGoToLinkedin}/></Link>
                        </dd>
                    </dl>
                    <dl>
                        <dt className="text-xl">{t.phone}</dt>
                        <dd className="text-sm"><a href="tel:+18137685545">( +1 ) 813-768-5545</a></dd>
                    </dl>
                    <dl tabIndex={0}>
                        <dt className="text-xl">{t.address}</dt>
                        <dd className="text-sm">
                            <p>{t.addressValue}</p>
                        </dd>
                    </dl>
                    <div className="flex h-fit pt-4 sm:pt-0">
                        <Link className="button-white" href="/contactme">{t.linkLbl}</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
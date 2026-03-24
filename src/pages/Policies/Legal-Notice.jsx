import React from "react";
import styles from "./Policy.module.css";

export default function LegalNotice() {
  return (
    <div className={styles.wrapper}>

      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Legal Notice</h1>
          <p>
            Welcome to Vemtek Insurance. We appreciate your trust in visiting our
            website to learn more about Medicare and related health insurance options.
            To ensure transparency and protect both you as a visitor
            and us as a service provider, this Legal Notice sets out the rules,
            responsibilities, and limitations that govern the use of our website and services.
          </p>
          <p>By accessing this site, you agree to the terms described here. If you do
            not agree with these terms, we kindly ask that you stop using the site.
            This Legal Notice is important because it outlines how you may use our
            content, how we limit our liability, and what your responsibilities are as a user.</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className={styles.container}>

        <section className={styles.card}>
          <h2>1. Purpose of This Website</h2>
          <p>
            Vemtek Insurance provides educational resources to help individuals understand Medicare plans and health
            insurance coverage. Our goal is to present information in a clear and accessible way, so you can make
            informed decisions about your healthcare needs.
          </p>

          <p>However, the information on this website should not be considered professional advice.
            It is not a substitute for speaking with a licensed insurance agent, a qualified financial professional, or a healthcare provider.
            Medicare regulations and insurance rules can change frequently, and the details of
            coverage often depend on your personal situation, location, and eligibility.</p>

          <p>This means the information here should be viewed as a guide or starting point, not the final word on your coverage options.</p>
        </section>

        <section className={styles.card}>
          <h2>2. Ownership of Content</h2>
          <p>
            All of the materials on this website belong to Secure Future Coverage or our content partners.
            This includes articles, guides, design elements, images, videos, and logos. Intellectual property laws protect this content.
          </p>

          <p>You are welcome to read, print, and share information for your own personal and non-commercial use.
            But you may not copy, modify, distribute, or publish any content for commercial purposes without written permission from Vemtek Insurance.</p>

          <p>Respecting these boundaries helps ensure that our website remains a reliable, trustworthy resource for everyone.</p>
        </section>

        <section className={styles.card}>
          <h2>3. Acceptable Use</h2>
          <p>
            By using our website, you agree to follow these rules:
          </p>

          <ul>
            <li>Use the site only for lawful purposes.</li>
            <li>Do not attempt to harm, disable, or disrupt the site’s functionality.</li>
            <li>Do not introduce viruses, malware, or harmful software.</li>
            <li>Do not collect or scrape data from the site without permission.</li>
            <li>Do not misrepresent yourself as a Secure Future Coverage employee or agent.</li>
          </ul>
          <p>We reserve the right to restrict or block access to any individual who misuses the site or violates these rules.</p>
        </section>

        <section className={styles.card}>
          <h2>4. Informational Nature of Content</h2>
          <p>
            The information provided on this website is offered in good faith for general educational purposes. While
            we work hard to provide accurate and timely content, we cannot guarantee that every detail will always be current.
          </p>
          <p>Medicare policies change regularly. Coverage options, premium costs, and plan availability may vary depending on where
            you live. We recommend that you verify any details with official Medicare resources or by consulting a licensed insurance professional before making decisions.</p>
        </section>

        <section className={styles.card}>
          <h2>5. No Professional Advice</h2>
          <p>
            Nothing on this website should be interpreted as:
          </p>
          <ul>
            <li>Medical advice</li>
            <li>Legal advice</li>
            <li>Financial planning advice</li>
          </ul>
          <p>You should always consult qualified professionals before making choices that affect your health or finances. We provide information to help
            guide your understanding, but the final decision should be based on expert advice tailored to your circumstances.</p>
        </section>

        <section className={styles.card}>
          <h2>6. Accuracy and Updates</h2>
          <p>
            Vemtek Insurance strives to ensure that information on this website is complete and up to date. However,
            we do not guarantee accuracy at all times. Mistakes can happen, and Medicare regulations can change with little notice.
          </p>

          <p>We may update or revise content at any time without prior notice. While we make these efforts to
            keep you informed, it is ultimately your responsibility to confirm key details with official sources.</p>
        </section>




        <section className={styles.card}>
          <h2>7. External Links</h2>
          <p>
            Our website may include links to external websites. These are provided for convenience and to help you find additional resources.
          </p>

          <p>Vemtek Insurance does not control or endorse third-party websites and is not responsible for their content, privacy practices,
            or policies. Once you leave our website, you are subject to the terms and conditions of the external site.
            We encourage you to exercise caution and review the policies of any site you visit.</p>
        </section>




        <section className={styles.card}>
          <h2>8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Secure Future Coverage is not liable for damages or losses that may
            result from your use of this website. This includes:
          </p>

          <ul>
            <li>Technical issues such as downtime, errors, or broken links</li>
            <li>Viruses or harmful code encountered through use of the site.</li>
            <li>Reliance on outdated or incorrect information.</li>
            <li>Financial or personal decisions made solely based on our content.</li>
          </ul>

          <p>While we take reasonable steps to provide a secure and accurate site, you use it at your own risk.</p>
        </section>




        <section className={styles.card}>
          <h2>9. Indemnification</h2>
          <p>
            By using this website, you agree to indemnify and hold harmless Vemtek Insurance, its employees,
            and representatives from claims, damages, or losses that may result from your misuse of the site or violation of this Legal Notice.
          </p>

          <p>This includes covering costs such as attorney fees and other expenses if a dispute arises because of your actions.</p>
        </section>



        <section className={styles.card}>
          <h2>10. Website Availability</h2>
          <p>
            We work to ensure our site is available at all times. However, there may be occasions when the website
            is temporarily unavailable due to technical issues, updates, or circumstances outside of our control.
          </p>

          <p>Vemtek Insurance is not responsible for any inconvenience or losses caused by downtime or interruptions.</p>
        </section>

        <section className={styles.card}>
          <h2>11. Security</h2>
          <p>
            We take steps to maintain a safe and secure website. However, no online platform can guarantee absolute security.
            You are responsible for protecting your own devices and data, such as by using antivirus software and safe browsing practices.
          </p>

          <p>Vemtek Insurance is not liable for harm caused by unauthorized access, hacking, or malicious software that may affect your devices</p>
        </section>


        <section className={styles.card}>
          <h2>12. Changes to Legal Notice</h2>
          <p>
            We may revise this Legal Notice at any time to reflect changes in laws, industry practices,
            or our business operations. Updates will be posted on this page with a revised effective date.
          </p>

          <p>Your continued use of the site after updates means you accept the new terms. For that reason, we recommend reviewing this page periodically.</p>
        </section>




        <section className={styles.card}>
          <h2>13. Governing Law</h2>
          <p>
            This Legal Notice is governed by the laws of the United States and the state in which Vemtek Insurance operates.
            If a dispute arises, it will be handled exclusively in the courts located in that state. By using this site, you agree to submit to the jurisdiction of those courts.</p>
        </section>




        <section className={styles.card}>
          <h2>14. Severability</h2>
          <p>
            If any provision of this Legal Notice is found to be invalid or unenforceable, the remaining provisions will remain in full
            effect. This ensures the agreement continues to function even if one section is struck down.</p>
        </section>



        <section className={styles.card}>
          <h2>15. Entire Agreement</h2>
          <p>
            This Legal Notice represents the entire agreement between you and Secure Future Coverage regarding the use of this
            website. It replaces any prior agreements or understandings, whether written or verbal, on the subject of site use.</p>
        </section>




        <section className={styles.card}>
          <h2>16. Contact Information</h2>
          <p>If you have questions or concerns about this Legal Notice, please contact us:</p>
          <strong>Vemtek Insurance</strong>
          <div className={styles.contactBox}>
            <p><strong>Phone:</strong> <a href="tel:+15165185065">+1 516-518-5065</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@vemtek.com">info@vemtek.com</a></p>
            <p><strong>Address:</strong> <a href="https://www.google.com/maps?q=Vemtek+LLC,+7+White+Deer+Ct+Huntington,+New+York,+11743" target="_blank" rel="noopener noreferrer">Vemtek LLC, 7 White Deer Ct Huntington, New York, 11743</a></p>
          </div>
          <p>We are committed to maintaining transparency and integrity in all interactions. Your trust is important to us, and we welcome the opportunity to address any concerns you may have.</p>
        </section>


        <section className={styles.card}>
          <h2>17. Closing Statement</h2>
          <p>At Secure Future Coverage, we believe that clarity builds trust. This Legal Notice exists not to 
            create barriers but to ensure a safe, respectful, and transparent environment for everyone who visits our 
            site. By outlining your rights and responsibilities, we aim to create a balanced framework where both parties are protected.</p>
            <p>We thank you for taking the time to review this information. Your understanding and cooperation help us provide a better, more reliable experience.</p>
        </section>

      </div>
    </div>
  );
}

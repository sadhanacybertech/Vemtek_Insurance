import React from "react";
import styles from "./Policy.module.css";

export default function TermsConditions() {
    return (
        <div className={styles.wrapper}>
            {/* HERO */}
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Terms Of Use</h1>
                    <p>
                        These Terms of Use ("Terms") apply to the Vemtek Insurance
                        website and any mobile applications we operate (each an "Application")
                        that contain a link to these Terms. By using our Applications, you agree
                        to these Terms. Please read them carefully.
                    </p>
                </div>
            </div>

            {/* CONTENT */}
            <div className={styles.container}>

                <section className={styles.card}>
                    <h2>1. Use of this Application</h2>
                    <p>
                        The contents of this Application, whether our content or licensed from a third party, are protected by copyright.
                        You may view and download material from this Application for your own personal use. You may not sell, modify,
                        or use the material for any commercial purpose.
                    </p>
                    <p>
                        You will not use this Application to violate any laws, including federal Medicare and Medicaid
                        fraud and abuse provisions. You will not, and will not permit anyone else to, modify, adapt,
                        reverse engineer, or create derivative works of this Application.
                        You agree not to interfere with the operation of the Application or use any automated device,
                        such as a "robot" or "spider," to gather information from it.
                    </p>
                </section>

                <section className={styles.card}>
                    <h2>2. Use of Information and Resources</h2>
                    <p>
                        This Application provides information about our products and services,
                        health-related resources, and member access to health plan information.
                        The information on this Application is not a substitute for professional
                        medical advice or care from a physician. It is not intended for medical
                        diagnosis or treatment. You should not disregard or delay seeking medical
                        advice because of something you read on this
                        Application. We are not responsible for information provided by third-party
                        health information content providers or third-party sites linked to our application.
                    </p>
                </section>

                <section className={styles.card}>
                    <h2>3. Privacy and Communications</h2>
                    <p>
                        Your use of this Site is also governed by our Privacy Policy. We may
                        communicate with you via email, fax, or text, but you should be aware of the security risks involved.
                    </p>
                    <ul>
                        <li>
                           <span className="fw-bold" style={{fontSize:"14px"}}> Email and Fax:</span>
                            <p>Unencrypted email and fax communications may not be completely secure or confidential and could be accessed by others while in transit.</p>
                        </li>

                        <li>
                           <span className="fw-bold" style={{fontSize:"14px"}}> Text Messaging:</span>
                            <p>By opting in to text messaging, you are electing to receive protected health
                                information (PHI) via text, which makes the data available to your phone
                                carrier and others who may access your device. You understand that once texted,
                                your information may no longer be regulated under HIPAA's Privacy Rule. Your
                                participation is optional, and you can always receive information by phone instead.</p>
                        </li>

                        <li>
                           <span className="fw-bold" style={{fontSize:"14px"}}> Voice-Enabled Devices:</span>
                            <p>If you enable the Vemtek Insurance skill on a voice-enabled device
                                (like an Amazon Echo or Google Home), you are authorizing us to disclose
                                your information, including PHI, to the device manager (e.g., Amazon or Google). Once disclosed,
                                your information will be governed by the device manager's terms and may no longer
                                be protected under HIPAA. You can disable this feature at any time.</p>
                        </li>
                    </ul>
                </section>

                <section className={styles.card}>
                    <h2>4. Third-Party Links</h2>
                    <p>
                        We may provide links to other websites and services not owned or controlled by us.
                        These links are provided for your convenience, but we do not endorse these third-party
                        sites. We cannot guarantee the accuracy of
                        their content or be responsible for their privacy practices. You should review the
                        privacy policies and user agreements of any third-party websites you visit.
                    </p>
                </section>

                <section className={styles.card}>
                    <h2>5. Disclaimers and Limitation of Liability</h2>
                    <p>
                        The Application and its services, content, and information are provided "as is".
                        We expressly disclaim all warranties of any kind, whether express or implied,
                        including warranties of merchantability
                        and fitness for a particular purpose. We do not warrant that the functions or
                        operation of the Site will be uninterrupted or error-free.
                    </p>

                    <p>We are not liable to you for any damages or penalties whatsoever, including
                        incidental, indirect, or consequential damages, even if we have been
                        advised of the possibility of such damages.
                        Our liability is limited to the actual damages you incur. The remedies
                        provided to you in these Terms are exclusive and limited to what is expressly stated.</p>
                </section>

                <section className={styles.card}>
                    <h2>6.  Your Account and Access</h2>
                    <p>
                        If you are an authorized user, your username and password will allow you to access
                        information about you and your plan. You are solely responsible for controlling your
                        Login Information and for all activity in your account. You must notify us immediately
                        of any unauthorized use. To protect your information, we do not allow access to the secure
                        member portal for users with anonymous IP addresses. A blocked or anonymous IP address
                        can be caused by your network, a personal VPN, or other reasons.
                    </p>
                </section>

                <section className={styles.card}>
                    <h2>7. General Provisions</h2>
                    <ul>
                        <li>
                            <span className="fw-bold" style={{fontSize:"14px"}}>Changes to These Terms:</span>
                            <p>We may revise, modify, or amend these Terms at any time. Any changes will be
                                effective immediately upon posting them to the Application. Your continued
                                use of the Site constitutes your acceptance of these changes.</p>
                        </li>

                        <li>
                            <span className="fw-bold" style={{fontSize:"14px"}}>Termination:</span>
                            <p>We may terminate your right to use this Application at any time.</p>
                        </li>
                        
                        <li>
                           <span className="fw-bold" style={{fontSize:"14px"}}> Jurisdiction:</span>
                            <p>These Terms shall be governed by and construed in accordance with the laws
                                 of the State of [Insert State]. Any legal action or proceeding related to
                                  these Terms shall be brought exclusively in a court within [Insert City],
                                   [Insert State].</p>
                        </li>

                        <li>
                           <span className="fw-bold" style={{fontSize:"14px"}}> International Use:</span>

                            <p>We make no claims that the content of this Application is appropriate
                                 or may be downloaded outside of the
                                 United States. If you access this Application from outside the U.S.,
                                  you do so at your own risk and are responsible for complying with the laws of your jurisdiction.</p>
                        </li>

                        <li>
                           <span className="fw-bold" style={{fontSize:"14px"}}> No Endorsement:</span>

                            <p>We do not endorse any specific provider or third party. We act solely
                                 as an intermediary between you and third-party providers and disclaim any liability for their content, products, or services.</p>
                        </li>
                    </ul>
                </section>

            </div>
        </div>
    );
}

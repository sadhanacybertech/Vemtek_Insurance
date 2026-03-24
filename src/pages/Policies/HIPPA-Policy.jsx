import React from "react";
import styles from "./HIPPA-Policy.module.css";

export default function HippaNotice() {
    return (
        <div className={styles.wrapper}>

            {/* HERO */}
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>HIPAA Notice</h1>
                    <p>
                        This notice describes how medical information about you may be used and
                        disclosed and how you can get access to this information. Please review it carefully.
                    </p>
                </div>
            </div>

            {/* CONTENT */}
            <div className={styles.container}>

                <section className={styles.card}>
                    <h2>1. Our Pledge Regarding Your Health Information</h2>
                    <p>
                        At Vemtek Insurance, we understand that health information about you and your health
                        is personal. We are committed to protecting your medical information and to
                        helping you understand your rights regarding that information.
                        We create a record of the care and services you receive and use your record to provide
                        services, to comply with certain legal requirements, and to bill for those services. This Notice applies to
                        all records of your care and benefits created or retained by Secure Future Coverage,
                        whether made by our personnel or your personal doctor.
                    </p>
                </section>

                <section className={styles.card}>
                    <h2>2. How We May Use and Disclose Health Information About You</h2>
                    <p>
                        Below are examples of how we commonly use or disclose your health information. Not every use or disclosure in a category is listed.
                    </p>
                    <ul>
                        <li>
                            <span className={styles.bold}>For Treatment:</span>
                            <p>We may use and disclose health information to deliver, coordinate, and manage your health care and related services.
                                For example, we may share information with doctors, pharmacies, hospitals, or other providers involved in your care.</p>
                        </li>
                        <li>
                            <span className={styles.bold}>For Payment:</span>
                            <p>We may use and disclose health information to obtain payment for the health care services
                                we provide, such as processing claims with payers or determining eligibility for coverage.</p>
                        </li>
                        <li>
                            <span className={styles.bold}>For Health Care Operations:</span>
                            <p>We may use and disclose information for business activities necessary to run our organization, including quality
                                assessment, training, credentialing, accreditation, auditing, case management, customer service, and other administrative activities.</p>
                        </li>


                        <li>
                            <span className={styles.bold}>Appointment Reminders and Health-Related Benefits:</span>
                            <p>We may contact you with appointment reminders, treatment alternatives, or health-related benefits and services that may be of interest to you.</p>
                        </li>


                        <li>
                            <span className={styles.bold}>As Required By Law:</span>
                            <p>We will disclose health information when required to do so by international, federal, state, or local law.</p>
                        </li>

                        <li>
                            <span className={styles.bold}>Public Health and Safety:</span>
                            <p>We may disclose health information to public health authorities for the prevention or control of disease,
                                injury, or disability, to report adverse events or product defects, or to comply with public health investigations.</p>
                        </li>

                        <li>
                            <span className={styles.bold}>Law Enforcement and Judicial Proceedings:</span>
                            <p>We may disclose information to law enforcement officials as required by law or in response to a court order, warrant, or other legal process.</p>
                        </li>

                        <li>
                            <span className={styles.bold}>Research:</span>
                            <p>Under certain circumstances, we may use or disclose health information for research purposes. When feasible, we will ask for your authorization or remove personally identifying information.</p>
                        </li>


                        <li>
                            <span className={styles.bold}>Other Uses and Disclosures:</span>
                            <p>There are other permitted or required uses and disclosures not listed above. When required, we will obtain your written
                                authorization before using or disclosing your protected health information (PHI) for purposes not described in this Notice.</p>
                        </li>




                    </ul>
                </section>

                <section className={styles.card}>
                    <h2>3.  Uses and Disclosures That Require Your Authorization</h2>
                    <p>We will obtain your written authorization before using or disclosing PHI
                        for most marketing purposes, sale of PHI, or most uses
                        and disclosures of psychotherapy notes. You may revoke an authorization
                        at any time, in writing, except to the extent that we have already acted upon it.</p>
                </section>

                <section className={styles.card}>
                    <h2>4.  Your Rights With Respect to Your Health Information</h2>
                    <p>
                        You have the following rights regarding the PHI we maintain about you. To exercise
                        any of these rights, send a written request to the Privacy Officer listed below.
                    </p>

                    <ul>
                        <li>
                            <span className={styles.bold}>Right to Inspect and Copy:</span>
                            <p>You may request access to inspect or receive copies of your medical
                                and billing records, subject to certain limitations. We may charge a reasonable, cost-based fee for copies.</p>
                        </li>


                        <li>
                            <span className={styles.bold}>Right to Amend:</span>
                            <p>If you believe information in your record is incorrect or incomplete, you may request
                                an amendment. We may deny the request and will provide a written explanation if we do.</p>
                        </li>


                        <li>
                            <span className={styles.bold}>Right to an Accounting of Disclosures:</span>
                            <p>You may request a list of certain disclosures of your PHI made by Secure Future Coverage during a specified time period (up to six years prior to the request).</p>
                        </li>


                        <li>
                            <span className={styles.bold}>Right to Request Confidential Communications:</span>
                            <p>You may ask that we communicate with you in a specific way or at a specific location (for example, a different phone number or an alternate mailing address).</p>
                        </li>


                        <li>
                            <span className={styles.bold}>Right to Request Restrictions:</span>
                            <p>You may request restrictions on certain uses or disclosures of your PHI. While we will consider your request, we are not required to agree, except in limited circumstances.</p>
                        </li>

                        <li>
                            <span className={styles.bold}>Right to Receive a Paper Copy of This Notice: </span>
                            <p>You may ask for and receive a paper copy of this Notice at any time, even if you previously agreed to receive this Notice electronically.</p>
                        </li>




                    </ul>
                </section>

                <section className={styles.card}>
                    <h2>5.  Our Responsibilities</h2>
                    <p>
                        We are required by law to maintain the privacy of your PHI, to provide you with this Notice of our legal duties and privacy
                        practices, and to abide by the terms of the Notice currently in effect. We will notify you in the case of a breach
                        of unsecured PHI as required by law.
                    </p>
                </section>
                <section className={styles.card}>
                    <h2>6.   Filing a Complaint or Reporting a Problem</h2>
                    <p>
                        If you believe your privacy rights have been violated, you may file a complaint
                        with Secure Future Coverage or with the U.S. Department of Health and Human Services (HHS), Office for Civil Rights.
                    </p>
                </section>

                <section className={styles.card}>
                    <h2>7. To file a complaint with Vemtek Insurance:</h2>
                    <p className={styles.subHeading}>
                        Privacy Officer, Vemtek Insurance
                    </p>

                    <div className={styles.contactBox}>
                        <p><strong>Phone:</strong> <a href="tel:+15165185065">+1 516-518-5065</a></p>
                        <p><strong>Email:</strong> <a href="mailto:info@vemtek.com">info@vemtek.com</a></p>
                        <p><strong>Address:</strong> <a href="https://www.google.com/maps?q=Vemtek+LLC,+7+White+Deer+Ct+Huntington,+New+York,+11743" target="_blank" rel="noopener noreferrer">Vemtek LLC, 7 White Deer Ct Huntington, New York, 11743</a></p>
                    </div>
                </section>


                <section className={styles.card}>
                    <h2>8. To file with the U.S. Department of Health and Human Services (OCR):</h2>
                    <p>
                        Visit the OCR website or call the OCR regional office. (If posting on your website, include a link or direct users how to find OCR complaint forms.)
                    </p>
                    <p>We will not retaliate or take any adverse action against you for filing a complaint.</p>
                </section>


                <section className={styles.card}>
                    <h2>9. Changes to This Notice:</h2>
                    <p>
                        We reserve the right to change this Notice and to make the revised or changed Notice effective for PHI we already have as well as any information we receive in the future.
                        If we revise this Notice, the revised version will be posted on our website and will be available upon request in our offices.
                    </p>
                </section>


                <section className={styles.card}>
                    <h2>10. Contact Information:</h2>
                    <p className={styles.subHeading}>
                        Privacy Officer,
                        Vemtek Insurance
                    </p>

                    <div className={styles.contactBox}>
                        <p><strong>Phone:</strong> <a href="tel:+15165185065">+1 516-518-5065</a></p>
                        <p><strong>Email:</strong> <a href="mailto:info@vemtek.com">info@vemtek.com</a></p>
                        <p><strong>Address:</strong> <a href="https://www.google.com/maps?q=Vemtek+LLC,+7+White+Deer+Ct+Huntington,+New+York,+11743" target="_blank" rel="noopener noreferrer">Vemtek LLC, 7 White Deer Ct Huntington, New York, 11743</a></p>
                    </div>
                </section>


            </div>
        </div>
    );
}


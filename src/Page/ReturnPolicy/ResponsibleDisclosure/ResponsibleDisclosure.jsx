import React from 'react';
import { Link } from 'react-router-dom';

const ResponsibleDisclosure = () => {
    return (
<section className='content-container lg:px-10 px-2 text-sm'>

<div className='space-y-3 text-xs my-3'>
 <p className='text-[#000] text-lg font-semibold'>Responsible Disclosure Policy</p>
 <p>At Takealot, we’ve built our business on the simple principle that our customers come first. We aim to keep our website, mobile site and related software applications (“<span className='font-medium'>Website</span>”), as well as the service offered on our Website (“<span className='font-medium'>Service</span>”) safe for everyone to use, and data security is of the utmost importance. If you have discovered a security vulnerability in our Website or Service, we encourage you to contact us and disclose it to us in a responsible manner.</p>

 <p>When security vulnerabilities are reported to us in compliance with this policy, Takealot will validate and fix such vulnerabilities as soon as reasonably possible, in line with our commitment to the privacy, safety and security of our customers. We will not take legal action against you or terminate your access to the Service if you discover and report security vulnerabilities responsibly in compliance with this policy. Takealot reserves all of its legal rights in the event of any noncompliance with this policy.</p>

 <p>If you are looking to report another type of issue, which falls outside of the scope of this policy, for example if you are a current customer and you suspect fraudulent activity or suspect that your account may have been compromised, <Link className='text-primary' to="/help-centre">please contact our support team here</Link>. Your issue will be investigated immediately and thoroughly.</p>

</div>


<div className='space-y-3 text-xs my-3'>
 <p className='text-[#000] text-lg font-semibold'>Reporting a Security Vulnerability</p>
 <p>If you think that you have found a security vulnerability in our Website or Service, please contact us immediately via security@takealot.com. When reporting a security vulnerability, you must do the following:</p>

 <ul className='pl-8 space-y-2 list-disc'>
<li>Include as much information as possible in your report, as we require a way to reproduce the security vulnerability in order to validate and fix it. “Proof-of-Concept” programs, tools, or test accounts that you’ve created are welcome, and the following information is required:
    <ul className='pl-5 space-y-2 list-disc'>
<li>the URL where the vulnerability occurs;</li>
<li>if applicable, the parameter where the vulnerability occurs;</li>
<li>the type of the vulnerability;</li>
<li>a step-by-step instruction how to reproduce the vulnerability;</li>
<li>a demonstration of the vulnerability, by screenshots or video; and</li>
<li>if applicable, an attack scenario (an example attack scenario may help demonstrate the risk and get the issue resolved faster).</li>
    </ul>
</li>

<li>Do not share your findings with anyone until Takealot has had adequate time to investigate and deploy a fix. We will notify you when the security vulnerability has been patched.</li>
<li>Consider telling us how to identify you.</li>
 </ul>

 <p>We’re particularly interested in:</p>
 <ul className='pl-8 space-y-2 list-disc'>
<li>XSS attacks</li>
<li>SQL injection</li>
<li>Remote code execution</li>
<li>Circumventing permission limitations</li>
<li>CSRF attacks</li>
 </ul>

</div>


<div className='space-y-3 text-xs my-3'>
 <p className='text-[#000] text-lg font-semibold'>Restrictions</p>

 <p>At Takealot, we welcome “white hat” security researchers, and appreciate your research and proactive responsible disclosure. Please note however that Takealot does not permit you to do any of the following:</p>
 <ul className='pl-8 space-y-2 list-disc'>
<li>access, modify or destroy a Takealot customer’s account or data;</li>
<li>interrupt or degrade our Service;</li>
<li>execute a “Denial of Service” attack;</li>
<li>post, transmit, upload, link to, send or store any malicious software;</li>
<li>send any unsolicited or unauthorized mail or messages;</li>
<li>violate any applicable law;</li>
<li>perform any testing that would result in any of the above; or</li>
<li>attempt to do any of the above.</li>
 </ul>
 <p>Contravening this policy in any way may result in us suspending or terminating your access to the Service, contacting the relevant authorities and/or pursuing any other remedies we have at law.</p>

</div>


<div className='space-y-3 text-xs my-3'>
 <p className='text-[#000] text-lg font-semibold'>Our Commitment</p>

 <p>If you identify a security vulnerability in compliance with this policy, Takealot commits to:</p>
 <ul className='pl-8 space-y-2 list-disc'>
<li>acknowledging receipt of your vulnerability report in a timely manner;</li>
<li>confirming the validity of your report; and</li>
<li>notifying you when the vulnerability is fixed.</li>
 </ul>
 <p>We will unfortunately not offer any monetary rewards.</p>

</div>
</section>

    );
};

export default ResponsibleDisclosure;
import ContactButtons from "../components/ContactButtons";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-primary text-2xl p-4 font-bold">CONTACT ME</h1>
      <div>
        <p>
          Thank you for visiting my website! I&apos;m excited to connect with
          you and discuss any opportunities or inquiries you may have. There are
          several ways to get in touch with me:
        </p>
        <dl className="space-y-4 pt-2">
          <div>
            <dt className="text-secondary font-semibold text-lg">Email:</dt>
            <dd>
              Feel free to reach out to me via email at{" "}
              <a
                className="text-info hover:underline hover:text-secondary"
                href="mailto:contactme@darickmcbride.com"
              >
                contactme@darickmcbride.com
              </a>
              . I check my email regularly and will do my best to respond to
              your message promptly. Whether you have a position that fits my
              expertise, a question, or just want to say hello, I&apos;d love to
              hear from you.
            </dd>
          </div>
          <div>
            <dt className="text-secondary font-semibold text-lg">Linkedin:</dt>
            <dd>
              You can also connect with me on LinkedIn. Visit my LinkedIn
              profile{" "}
              <a
                className="text-info hover:underline hover:text-secondary"
                href="https://www.linkedin.com/in/darickmcbride"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              to learn more about my professional background and interests.
              Don&apos;t hesitate to send a connection request or a direct
              message, and I&apos;ll be sure to respond.
            </dd>
          </div>
          <div>
            <dt className="text-secondary font-semibold text-lg">GitHub:</dt>
            <dd>
              For a deeper look at my technical skills and projects, visit my
              GitHub profile{" "}
              <a
                className="text-info hover:underline hover:text-secondary"
                href="https://github.com/DarickMcBride"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              . You can explore my code repositories and see some of the
              projects I&apos;ve worked on. If you have any questions or would
              like to know more, I&apos;d be happy to discuss it. I&apos;m
              looking forward to hearing from you and engaging in meaningful
              conversations. Whether it&apos;s about business collaborations,
              tech discussions, or just a friendly chat, I&apos;m here to
              connect. Let&apos;s get in touch and explore the possibilities!
            </dd>
          </div>
        </dl>
        <ContactButtons />
        <p className="">
          I&apos;m looking forward to hearing from you and engaging in
          meaningful conversations. Whether it&apos;s about career
          opportunities, tech discussions, or just a friendly chat, let&apos;s
          connect!
        </p>
      </div>
    </div>
  );
}

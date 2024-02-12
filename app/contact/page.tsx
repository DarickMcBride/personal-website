import ContactButtons from "../components/ContactButtons";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col items-center p-20">
      <h1 className="text-primary text-2xl p-4">About Me</h1>
      <div>
        <p>
          Thank you for visiting my website! I&rsquo;m excited to connect with
          you and discuss any opportunities or inquiries you may have. There are
          several ways to get in touch with me:
        </p>
        <dl className="space-y-0 pt-2">
          <dt className="text-secondary text-lg">Email:</dt>
          <dd>
            Feel free to reach out to me via email at{" "}
            <a className="text-info" href="mailto:contactme@darickmcbride.com">
              contactme@darickmcbride.com
            </a>
            . I check my email regularly and will do my best to respond to your
            message promptly. Whether you have a position that fits my
            expertise, a question, or just want to say hello, I&rsquo;d love to
            hear from you.
          </dd>
          <dt className="text-secondary text-lg">Linkedin:</dt>
          <dd>
            You can also connect with me on LinkedIn. Visit my LinkedIn profile{" "}
            <a
              className="text-info"
              href="https://www.linkedin.com/in/darickmcbride"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{" "}
            to learn more about my professional background and interests.
            Don&rsquo;t hesitate to send a connection request or a direct
            message, and I&rsquo;ll be sure to respond.
          </dd>
          <dt className="text-secondary text-lg">GitHub:</dt>
          <dd>
            For a deeper look at my technical skills and projects, visit my
            GitHub profile{" "}
            <a
              className="text-info"
              href="https://github.com/DarickMcBride"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            . You can explore my code repositories and see some of the projects
            I&rsquo;ve worked on. If you have any questions or would like to
            know more, I&rsquo;d be happy to discuss it. I&rsquo;m looking
            forward to hearing from you and engaging in meaningful
            conversations. Whether it&rsquo;s about business collaborations,
            tech discussions, or just a friendly chat, I&rsquo;m here to
            connect. Let&rsquo;s get in touch and explore the possibilities!
          </dd>
        </dl>
        <ContactButtons  />
        <p className="pt-2">
          I&rsquo;m looking forward to hearing from you and engaging in
          meaningful conversations. Whether it&rsquo;s about career
          opportunities, tech discussions, or just a friendly chat, I&rsquo;m
          here to connect. Let&rsquo;s get in touch and explore the
          possibilities!
        </p>
      </div>
    </div>
  );
}

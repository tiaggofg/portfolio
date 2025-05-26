import {
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

export const socialMedias = [
  {
    icon: (
      <EnvelopeSimple
        className="hover:opacity-100 opacity-50 cursor-pointer"
        size={25}
      />
    ),
    url: "mailto:dev@tiagogodoy.online",
  },
  {
    icon: (
      <GithubLogo
        className="hover:opacity-100 opacity-50 cursor-pointer"
        size={25}
      />
    ),
    url: "https://github.com/tiaggofg",
  },
  {
    icon: (
      <LinkedinLogo
        className="hover:opacity-100 opacity-50 cursor-pointer"
        size={25}
      />
    ),
    url: "https://linkedin.com/in/tiaggofg",
  },
  {
    icon: (
      <InstagramLogo
        className="hover:opacity-100 opacity-50 cursor-pointer"
        size={25}
      />
    ),
    url: "https://www.instagram.com/tiaggofg",
  },
];

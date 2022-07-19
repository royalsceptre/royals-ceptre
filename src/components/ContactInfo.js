/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { css } from "emotion";

import SocialLink from "./SocialLink";

import { breakpoints } from "../theme";

const anchorStyle = css`
  margin-right: 24px;
  @media (max-width: ${breakpoints.small}) {
    margin: 0 12px;
  }
`;

function ContactInfo() {
  return (
    <React.Fragment>
      <p
        className={css`
          margin-bottom: 30px;
        `}
      >
        I’m available for freelance and currently seeking a full time position.
        If you're interested, feel free to send me an email or fill out the
        provided form.
      </p>
      <div
        className={css`
          font-weight: 500;
          font-size: 1.1rem;
        `}
      >
        Email
      </div>
      <a
        className={css`
          display: inline-block;
          margin-bottom: 30px;
        `}
        href="mailto:aaronchupa610@gmail.com"
      >
        aaronchupa610@gmail.com
      </a>
      <br />
      <div className={css`display: flex`}>
        <div>
          {/* <SocialLink
            className={anchorStyle}
            type="LinkedIn"
            href="https://www.linkedin.com/in/noah-sim-392a9a241"
            width="32px"
            height="32px"
          /> */}
          <SocialLink
            className={anchorStyle}
            type="Github"
            href="https://github.com/fulldev001"
            width="32px"
            height="32px"
          />
          <SocialLink
            className={anchorStyle}
            type="CodePen"
            href="https://codepen.io/aaronchupa"
            width="32px"
            height="32px"
          />
        </div>
        <div>
          <img src="https://www.google.com/maps/vt/data=z_ICALad_K13LiGa0VvdUXWikoLwcJY7LzTEohjBClcRsNozGjldl9SHVkuIO_Jz4pnbW9ynjilhMa2N-trWFaCeGw--c-2fofsjd7yZppm2WAmYbJyX5QozNYSQxQdkYW3MukUpxv2rRMUFEZTQJEZzqbLRTzkyVTs4wJLJCpRqMU_Mhm6SmVb0BqGK3W7RaCwzee0Y7L83Mjw_czNA9lSor8zsO5cqRZrmDjT1drQsOiQbmBSz" alt="Map of Kharkiv" style={{width: "300px"}}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactInfo;

import { useRef, useEffect,useState } from "react";
import Accordion from "./Accordion";
import Message from "./Message";
import Search from "./Search";

const MessageBar = () => {

  return (
    <div className="mes_bar">
      <Search/>
      <Accordion name="Unread">
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
      </Accordion>

      <Accordion name="conversations">
      <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
      </Accordion>

      <Accordion name="Group / Team">
      <ul>
          <li>Profile</li>
          <li>Privacy & Safety</li>
          <li>Notifications</li>
        </ul>
      </Accordion>

      <Accordion name="spam">
      <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
      </Accordion>
    </div>
  );
};

export default MessageBar;

/** if (btnRef.current !== null) {
      let button = btnRef.current as HTMLButtonElement;

      let acc = document.querySelectorAll(button.className);

      for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          acc[i].classList.toggle("active");
          //accordion-content
          let panel = acc[i].nextElementSibling as HTMLDivElement;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = "";
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }
    } */

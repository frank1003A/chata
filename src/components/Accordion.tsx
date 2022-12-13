import {ReactNode, useState, useEffect} from "react";

interface AccordionProps {
    name: string;
    children: ReactNode;
}

const Accordion = ({name, children}: AccordionProps) => {
    const [mount, setMount] = useState<boolean>(false)

  useEffect(() => {
    setMount(true)
  }, [mount])

  useEffect(() => {
    // no cleanup ---> to fix later
    let buttons = document.querySelectorAll(".accordion");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", () => {
        let panel = buttons[i].nextElementSibling as HTMLDivElement;
        buttons[i].classList.toggle("active");
        if (panel.style.maxHeight) {
          panel.style.maxHeight = "";
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }, [mount])

  return (
    <div>
      <button className="accordion">{name}</button>
      <div className="accordion-content">{children}</div>
    </div>
  );
};

export default Accordion;

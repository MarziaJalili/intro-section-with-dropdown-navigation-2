import navbarData from "./navbarData";
import { useState } from "react";

function NavItems() {
  const [navbarItems, setNavbarItems] = useState(navbarData);

  function handleClick(id) {
    setNavbarItems(prev => prev.map(item => {
      return item.id === id ?
        { ...item, detailsShown: !item.detailsShown }
        : item;
    }));
  }

  const items = navbarItems.map(item => {
    const arrowIcon = item.detailsShown ? {
      src: "./images/icon-arrow-up.svg",
      alt: "icon-arrow-up"
    }
      : {
        src: "./images/icon-arrow-down.svg",
        alt: "icon-arrow-down"
      }

    return (
      <li key={item.id}>
        <a href="#" className="flex" onClick={() => { handleClick(item.id) }}>
          {item.name}

          {item.button ?
            <button>
              <img src={arrowIcon.src} alt={arrowIcon.alt} />
            </button> : null}
        </a>

        {item.detailsShown ?
          item.details ?
            item.details
            : null : null}
      </li>
    )
  })
  return (
    <ul>{items}</ul>
  )
}

export default NavItems;
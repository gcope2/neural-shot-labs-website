export default {
  title: "Neural Shot Labs Website",
  items: [
    {
      id: "home",
      title: "Home",
      slug: "home",
      location: "?page=home",
    },
    {
      id: "about",
      title: "About",
      slug: "about",
      location: "?page=about",
      children: [
        { id: "about-main", title: "About Us", slug: "about" },
      ]
    },
    {
      id: "contact",
      title: "Contact",
      slug: "contact",
      location: "?page=contact",
      children: [
        { id: "contact-main", title: "Get in Touch", slug: "contact" },
      ]
    },
    {
      id: "what-we-do",
      title: "What We Do",
      slug: "what-we-do",
      location: "?page=what-we-do",
      children: [
        { id: "what-we-do-main", title: "Our Services", slug: "what-we-do" },
      ]
    }
  ]
};
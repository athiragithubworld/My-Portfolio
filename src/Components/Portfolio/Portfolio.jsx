import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/Ecommerce1.jpg";
import IMG2 from "../../assets/Expense.jpg";
import IMG3 from "../../assets/Mailbox2.jpg";
import IMG4 from "../../assets/Meetup4.jpg";
import IMG5 from "../../assets/TodoList.jpg";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Ecommerce Project",
      github: "https://github.com/athiragithubworld/EcommerceProject",
      demo: "https://ecommerce-contactus.web.app/",
    },
    {
      id: 2,
      image: IMG2,
      title: "Expense Tracker Project",
      github: "https://github.com/athiragithubworld/ExpenseTrackerProject",
      demo: "https://expense-tracker-project-green.vercel.app/",
    },
    {
      id: 3,
      image: IMG3,
      title: "Mailbox Project",
      github: "https://github.com/athiragithubworld/MailBoxProject",
      demo: "https://mail-box-project.vercel.app/",
    },
    {
      id: 4,
      image: IMG4,
      title: "MeetUps Project",
      github: "https://github.com/athiragithubworld/Meetup_NextjsP2Deploy",
      demo: "https://meetup-nextjs-p2-deploy.vercel.app/",
    },
    {
      id: 5,
      image: IMG5,
      title: "ToDo List Project",
      github: "https://github.com/athiragithubworld/ToDoList_NextJsP4",
      demo: "https://to-do-list-next-js-p4.vercel.app/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                {" "}
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
        {/* <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt=""></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            {" "}
            <a href="http://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="http://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;

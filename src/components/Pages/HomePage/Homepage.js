import React, { useEffect } from "react";
import Header from "../../Header/Header";
import Swiper from "../../Swiper/SwiperBox";
import styles from "./Homepage.module.css";

import img from "../../../img/INTERIORS-T-768x768.png";
import aim from "../../../img/aim.png";
import home from "../../../img/home.png";
import briefcase from "../../../img/briefcase.png";
import certificate from "../../../img/certificate.png";
import designImg from "../../../img/grid1.jpg";
const Homepage = () => {
  useEffect(() => {
    document.title = "Homepage | Designing with Tega";
  });
  return (
    <div>
      <Header />
      <Swiper />
      <article className={styles.getStarted}>
        <h2>Now Make Your Home More Lovely!</h2>
        <button className={styles.getStartedBtn} type='button'>
          Get Started
        </button>
      </article>
      <article className={styles.gridContainer}>
        <div className={styles.gridBox}>
          <img src={img} alt='img' />
        </div>
      </article>
      <article className={styles.standard_container}>
        <div className={styles.standard}>
          <h3>
            We hold ourselves accountable to high standard of delivery and
            execution.
          </h3>
          <p>
            We are equipped to execute bespoke turnkey interior design projects,
            from exclusive private residences to pretigious hotels and
            commercial spaces
          </p>
        </div>
      </article>
      <section className={styles.description}>
        <div className={styles.sub_description}>
          <div className={styles.view_projects}>
            <small>[OUR BENEFIT]</small>
            <p>Ambitious Brand With a Successful Concept & Ideas</p>
            <button>View Projects</button>
          </div>
          <div className={styles.view_projects}>
            <div className={styles.customersFocus_img}>
              <img
                className={styles.description_img}
                src={aim}
                alt="customer's focus"
              />
            </div>
            <p>Customer Focus</p>
            <small>
              Customer choose us for the simplicity of communication and an
              understanding of what it's necessary to recevie in the end.
            </small>
          </div>
          <div className={styles.view_projects}>
            <div className={styles.customersFocus_img}>
              <img
                className={styles.description_img}
                src={briefcase}
                alt="customer's focus"
              />
            </div>
            <p>Professionalism</p>

            <small>
              We develop a full cycle of project documentation: an outline
              sketch, a design project, working documentation.
            </small>
          </div>
          <div className={styles.view_projects}>
            <div className={styles.customersFocus_img}>
              <img
                className={styles.description_img}
                src={home}
                alt="customer's focus"
              />
            </div>
            <p>Multi Experience</p>
            <small>
              We provide a wide range of services, we work in different styles,
              we project commercial and residential properties.
            </small>
          </div>
          <div className={styles.view_projects}>
            <div className={styles.customersFocus_img}>
              <img
                className={styles.description_img}
                src={certificate}
                alt="customer's focus"
              />
            </div>
            <p>Authors's Supervision</p>
            <small>
              We develop an attractive and convenient space form work and
              lesuire time, working on units, selecting materials and
              manufacturers.
            </small>
          </div>
        </div>
      </section>
      <section className={styles.people_reviews_section}>
        <div className={styles.people_reviews}>
          <p className={styles.customer_review}>Customer reviews</p>
          <p className={styles.whatPeopleSay}>What People Say?</p>
          <div className={styles.whatPeopleSay_quote}>
            <i className='fas fa-quote-left'></i>
          </div>
          <div className={styles.whatPeopleSay_para}>
            <p>
              The Design is really amazing. It's unbelievable what you do. I
              dont't even know what to say because it's too clean. Makes me want
              to come right now. My wife us in love with it. I will let you
              finish up so I can get the finished pictures. You are the best at
              what you do.
            </p>
            <p className={styles.anonymous}>
              <del>Anonymous </del>
            </p>
          </div>
        </div>
      </section>
      <div className={styles.designImg_box}>
        <img src={designImg} alt='img' />
      </div>
      <section className={styles.design_project_container}>
        <div className={styles.design_project}>
          <p className={styles.think_of_a_design}>
            Thinking of a design project?
          </p>
          <p className={styles.Craft_Design}>
            Let's Craft Design Excellence Together!
          </p>
          <button className={styles.sendmessage}>Send Message</button>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <p>&copy; 2020 InteriorswithTega. All Right reserved</p>
        </div>
        <div className={styles.footer_terms_container}>
          <a href='https://twitter.com/ifeanyiigweh'>
            <span>Privacy Policy</span>
          </a>
          <a href='https://twitter.com/ifeanyiigweh'>
            <span>Terms and Condition</span>
          </a>

          <span>
            <a href='https://twitter.com/ifeanyiigweh'>Site credit</a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;

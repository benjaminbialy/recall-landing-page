// import { signIn } from "../firebase/AuthService";
// import { useEffect, useContext } from "react";
// import UserContext from "../firebase/UserContext";
// import Router from "next/router";
import Footer from "../components/Footer";

export default function LandingPage() {
  // const userStatus = useContext(UserContext);

  // // if the user is authenticated, redirect them to the home page
  // if (userStatus.authenticated) {
  //   Router.push("/home");
  // }

  return (
    <div className="landing">
      <div className="landing--navbar">
        <h2>recall</h2>
        <div className="navbar--btns">
          <button
            className="login--btn"
            onClick={() => {
              // signIn();
            }}
          >
            Login
          </button>
          <button
            className="cta--nav"
            onClick={() => {
              // signIn();
            }}
          >
            Try recall Free
          </button>
        </div>
      </div>
      <div className="landing--header">
        <div className="header--pitch">
          <h1 className="header--pitch--heading">
            Delivering students the
            <span className="accent--span"> results they deserve</span>.
          </h1>
          <p>
            Active recall study tools that allow you to study smarter, not
            harder.
          </p>

          <button
            className="call-to-action"
            onClick={() => {
              // signIn();
            }}
          >
            Start Learning Today
          </button>
          <div className="box">
            <a
              rel="noreferrer"
              target={"_blank"}
              href="https://getatomi.com/blog/what-is-active-recall-and-how-effective-is-it/"
            >
              Research
            </a>{" "}
            shows, that active recall is{" "}
            <span className="accent--span">more than 50% more effective</span>{" "}
            than any other study technique.
          </div>
        </div>
        <div className="header--img--cont">
          <img className="header--img" src={"/students.png"}></img>
        </div>
      </div>
      <div className="features--recall">
        <h2>
          How recall <span className="accent--span">levels up</span> your
          memorisation game
        </h2>
        <p>
          Active recall is the practise of retrieving information from your
          brain to answer questions. To make questions or tests for yourself it
          either takes hours or costs you an arm and a leg.{" "}
          <span className="accent--span">We're here to solve just that.</span>
        </p>
        <p>
          How? By doing{" "}
          <span className="accent--span">
            all of the preparatory work for you
          </span>
          . So you can just focus on the important stuff; learning and enjoying
          life.
        </p>
      </div>
      <div className="features">
        <div className="feature--section">
          <h2 className="feature--heading">
            Our <span className="accent--span">favourite</span> features
          </h2>
          <div className="feature--tests">
            <div className="demoimg">
              <img src={"/testdemo.png"} alt={"tests demo"}></img>{" "}
            </div>

            <div className="feature--desc">
              <h3>Automatically generated and marked tests</h3>
              <p>
                Get shown a range of Multiple Choice, True or False and Write
                questions. All configurable to meet your needs.
              </p>
            </div>
          </div>
          <div className="feature--flashcards">
            <div className="demoimg">
              <img src={"/flashcarddemo.png"} alt={"flashcard demo"}></img>{" "}
            </div>

            <div className="feature--desc">
              <h3>Flashcards that can be shuffled</h3>
              <p>
                The original active recall technique, get access to all of your
                terms and definitions at the click of a button.
              </p>
            </div>
          </div>
          <div className="feature--learn">
            <div className="demoimg">
              <img src={"/MCdemo.png"} alt={"multiple choice demo"}></img>{" "}
            </div>

            <div className="feature--desc">
              <h3>Learn and recall</h3>
              <p>
                A combination of Multiple Choice and Write questions where you
                are slowly introduced new terms and reshown old to ensure you
                remember previously known terms.
              </p>
              <p>
                Get feedback on missed terms and configure the rate at which
                terms are introduced.
              </p>
            </div>
          </div>
          <div className="feature--write">
            <div className="demoimg">
              <img src={"/writedemo.png"} alt={"write demo"}></img>
            </div>
            <div className="feature--desc">
              <h3>Write mode</h3>
              <p>
                Cover every single term in your set and only finish once you've
                answered every term correctly. Get feedback on every wrong
                answer.
              </p>
            </div>
          </div>
          <div className="feature--import">
            <div className="demoimg">
              <img src={"/createsetdemo.png"} alt={"import demo"}></img>{" "}
            </div>

            <div className="feature--desc">
              <h3>Easily import sets from other platforms</h3>
              <p>
                For sites such as Quizlet, use their export function to create a
                copy of your study set and create a set on ours using that data
                by clicking our import button.
              </p>
            </div>
          </div>
          <div className="feature--create">
            <div className="demoimg">
              <img src={"/editingdemo.png"} alt={"editing demo"}></img>{" "}
            </div>

            <div className="feature--desc">
              <h3>Create sets and folders within minutes</h3>
              <p>
                Easily create sets of terms with the ability to use formatting
                such as lists, boldness, underlining and more! Study multiple
                sets at once by creating folders!
              </p>
            </div>
          </div>
        </div>
        <button
          className="feature--cta"
          onClick={() => {
            // signIn();
          }}
        >
          Change The Way You Study Today
        </button>{" "}
      </div>
      <div className="founders--note">
        <h3>Founder's Note</h3>
        <p>
          We’ve all been told to study smarter, not harder. But do any of us
          really know what that means?{" "}
          <span className="accent--span">I know I didn’t until</span> I started
          using active recall, the study technique which aims to retrieve
          information from the brain, instead of cramming it in.
        </p>
        <p>
          The current state of studying with active recall is a{" "}
          <span className="accent--span">nightmare</span>.
        </p>
        <ul>
          <li>Making tests or questions takes forever</li>
          <li>Flashcards get lost</li>
          <li>You can't easily share them</li>
          <li>Existing online tools are of poor quality and cost a fortune</li>
        </ul>
        <p>
          recall’s here to solve this.{" "}
          <span className="accent--span">
            We’re a bootstrapped, solo founded
          </span>
          , e-Learning platform{" "}
          <span className="accent--span">based in Australia</span>. What does
          that mean? We care. We’re not like the other guys. We’re the
          alternative you’ve been looking for.
        </p>
        <p>
          Feel free to{" "}
          <a className="contact--link" href="mailto: benjamincbialy@gmail.com">
            contact me
          </a>
          , personally, with any questions you've got.
        </p>
        <p>Enjoy recall!</p>
        <div className="founder--card">
          <img src="/profilepic.jpeg"></img>
          <div className="founder--cont">
            <p>Benjamin Bialy</p>
            <p className="founder--card--title">
              Student and Founder of recall
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "./styles.module.css";
import { Faqs } from "@/config/bannerConfig";
import Sidebar from "components/sidebar";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <div
        className={` ${styles.mts} flex flex-wrap  fixed z-0 overflow-hidden `}
      >
        <div className="w-full pt-6 pl-8 pr-6 overflow-hidden   xl:w-1/5">
          <Sidebar />
        </div>

        <div className={`  ${styles.btp} w-full overflow-hidden    xl:w-4/5 `}>
          <Image
            src={require("@/assets/images/banner/faqs.jpg")}
            alt="Aladinn Tech"
          />
        </div>
      </div>

      <div className={` ${styles.mtsin} relative bg-white `}>
        <div className="md:px-28 md:pt-10 ">
          <div className="flex flex-wrap md:px-38  overflow-hidden ">
            <div
              className={` ${styles.innerpagecon} w-full  pt-6 pl-8 pr-6 overflow-hidden md:w-full `}
            >
              <div className={` ${styles.titlesubcontainer} `}>
                <p className={` ${styles.titlesub} `}>
                  {" "}
                  Frequently Asked Question{" "}
                </p>

                <h2 className={` ${styles.titlemain} `}> FAQ </h2>
              </div>{" "}
            </div>

            <div className="flex w-full flex-wrap py-10 overflow-hidden">
              <div className={`${styles.detail}`}>
                <div className={classes.root}>
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <div className="w-full bg-gray-100">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <div className="block">
                          <Typography className={classes.heading}>
                            <p className="font-medium text-gray-600 block">
                              What is SEO?
                            </p>
                          </Typography>
                        </div>
                      </AccordionSummary>
                    </div>
                    <AccordionDetails>
                      <div className="flex flex-wrap overflow-hidden xl:px-2">
                        <p>
                          SEO stands for search engine optimization. It refers
                          to techniques that help your website become more
                          visible in organic search results for the people who
                          are looking for your brand, product, or service via
                          search engines like Google, Bing, and Yahoo.
                        </p>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <div className="w-full bg-gray-100">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                      >
                        <div className="block">
                          <Typography className={classes.heading}>
                            <p className="font-medium text-gray-600">
                              What are meta descriptions and do they still
                              matter?
                            </p>
                          </Typography>
                        </div>
                      </AccordionSummary>
                    </div>
                    <AccordionDetails>
                      <div className="flex flex-wrap overflow-hidden xl:px-2">
                        <p>
                          A meta description is a text that appears below your
                          page in a search engine result that explains what the
                          page is all about.
                        </p>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                  >
                    <div className="w-full bg-gray-100">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                      >
                        <div className="block">
                          <Typography className={classes.heading}>
                            <p className="font-medium text-gray-600">
                              What’s the difference between internal and inbound
                              links?
                            </p>
                          </Typography>
                        </div>
                      </AccordionSummary>
                    </div>
                    <AccordionDetails>
                      <div className="flex flex-wrap overflow-hidden xl:px-2">
                        <p>
                          Internal links are links on a page on your site that
                          go to another page on your site. Inbound links are
                          other websites that link to your content. Both are
                          valuable for SEO.
                        </p>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                  >
                    <div className="w-full bg-gray-100">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                      >
                        <div className="block">
                          <Typography className={classes.heading}>
                            <p className="font-medium text-gray-600">
                              How many internal links do I need on each page of
                              content?
                            </p>
                          </Typography>
                        </div>
                      </AccordionSummary>
                    </div>
                    <AccordionDetails>
                      <div className="flex flex-wrap overflow-hidden xl:px-2">
                        <p>
                          Just like you should avoid stuffing too many keywords
                          into your content, you should avoid stuffing too many
                          links into your content. Only include them when it
                          improves the reader experience.
                        </p>
                      </div>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                  >
                    <div className="w-full bg-gray-100">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header"
                      >
                        <div className="block">
                          <Typography className={classes.heading}>
                            <p className="font-medium text-gray-600">
                              Do I need to know code to do SEO myself?
                            </p>
                          </Typography>
                        </div>
                      </AccordionSummary>
                    </div>
                    <AccordionDetails>
                      <div className="flex flex-wrap overflow-hidden xl:px-2">
                        <p>
                          You do not need to know how to code for every element
                          of search optimization. There are some more advanced
                          SEO tactics that you will need a basic understanding
                          of code for, but it isn&#39;t necessary for every
                          part.
                        </p>
                      </div>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel6"}
                    onChange={handleChange("panel6")}
                  >
                    <div className="w-full bg-gray-100">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel6bh-content"
                        id="panel6bh-header"
                      >
                        <div className="block">
                          <Typography className={classes.heading}>
                            <p className="font-medium text-gray-600">
                              What is robots.txt?
                            </p>
                          </Typography>
                        </div>
                      </AccordionSummary>
                    </div>
                    <AccordionDetails>
                      <div className="flex flex-wrap overflow-hidden xl:px-2">
                        <p>
                          This is a page that gives search engines information
                          about the pages a company wants indexed or crawled.
                          You can find this page by going to
                          YOURDOMAIN/robots.txt.
                        </p>
                      </div>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel7"}
                    onChange={handleChange("panel7")}
                  >
                    <div className="w-full bg-gray-100">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel7bh-content"
                        id="panel7bh-header"
                      >
                        <div className="block">
                          <Typography className={classes.heading}>
                            <p className="font-medium text-gray-600">
                              What is the difference between indexed and
                              crawling?
                            </p>
                          </Typography>
                        </div>
                      </AccordionSummary>
                    </div>
                    <AccordionDetails>
                      <div className="flex flex-wrap overflow-hidden xl:px-2">
                        <p>
                          When search engines look through the content on your
                          website, they are crawling your site. As they crawl
                          your site, they index content that will appear in the
                          search engine. However, an important thing to remember
                          is that not all content is indexed. Search engines
                          pick what content they will and won&#39;t index as
                          they go through the crawling process.
                        </p>
                      </div>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel8"}
                    onChange={handleChange("panel8")}
                  >
                    <div className="w-full bg-gray-100">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel8bh-content"
                        id="panel8bh-header"
                      >
                        <div className="block">
                          <Typography className={classes.heading}>
                            <p className="font-medium text-gray-600">
                              What should I choose between mobile and web apps?
                            </p>
                          </Typography>
                        </div>
                      </AccordionSummary>
                    </div>
                    <AccordionDetails>
                      <div className="flex flex-wrap overflow-hidden xl:px-2">
                        <p>
                          Mobile Apps and web apps have their benefits and
                          challenges. Although mobile apps are more expensive
                          they are known to have better data collection and
                          monetization capabilities. On the other hand,
                          progressive web apps are a good option between web and
                          mobile apps.
                        </p>
                      </div>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel9"}
                    onChange={handleChange("panel9")}
                  >
                    <div className="w-full bg-gray-100">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel9bh-content"
                        id="panel9bh-header"
                      >
                        <div className="block">
                          <Typography className={classes.heading}>
                            <p className="font-medium text-gray-600">
                              I am not tech-savvy. So how can I know about the
                              progress of the website, mobile, and web app?
                            </p>
                          </Typography>
                        </div>
                      </AccordionSummary>
                    </div>
                    <AccordionDetails>
                      <div className="flex flex-wrap overflow-hidden xl:px-2">
                        <p>
                          You need not be a tech expert when we are with you.
                          Our Project Manager will regularly update you
                          regarding the progress of the work and the tasks
                          accomplished during a particular period.
                        </p>
                      </div>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel10"}
                    onChange={handleChange("panel10")}
                  >
                    <div className="w-full bg-gray-100">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel10bh-content"
                        id="panel10bh-header"
                      >
                        <div className="block">
                          <Typography className={classes.heading}>
                            <p className="font-medium text-gray-600">
                              What is the cost of web and mobile app
                              development?
                            </p>
                          </Typography>
                        </div>
                      </AccordionSummary>
                    </div>
                    <AccordionDetails>
                      <div className="flex flex-wrap overflow-hidden xl:px-2">
                        <p>
                          The cost of building a website or mobile app depends
                          on the level of customization, the technology used,
                          specifications, and functionalities to be included.
                          Thus, the cost varies from project to project.
                        </p>
                      </div>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel11"}
                    onChange={handleChange("panel11")}
                  >
                    <div className="w-full bg-gray-100">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel11bh-content"
                        id="panel11bh-header"
                      >
                        <div className="block">
                          <Typography className={classes.heading}>
                            <p className="font-medium text-gray-600">
                              How much time will it take to develop a mobile app
                              and website?
                            </p>
                          </Typography>
                        </div>
                      </AccordionSummary>
                    </div>
                    <AccordionDetails>
                      <div className="flex flex-wrap overflow-hidden xl:px-2">
                        <p>
                          The time taken for development will completely depend
                          on the project scope and the budget allocated. Our
                          Account Managers regularly update clients regarding
                          the extent to which work has been completed along with
                          the estimated time to complete the remaining work.
                        </p>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel12"}
                    onChange={handleChange("panel12")}
                  >
                    <div className="w-full bg-gray-100">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel12bh-content"
                        id="panel12bh-header"
                      >
                        <div className="block">
                          <Typography className={classes.heading}>
                            <p className="font-medium text-gray-600">
                              Will I be provided with complete technical support
                              once the website and mobile app are delivered to
                              me?
                            </p>
                          </Typography>
                        </div>
                      </AccordionSummary>
                    </div>
                    <AccordionDetails>
                      <div className="flex flex-wrap overflow-hidden xl:px-2">
                        <p>
                          Yes. Of Course. You will be provided with complete
                          technical support and app maintenance once we deliver
                          you the complete app. Although some small tasks of
                          updating can be performed by yourself, major work will
                          be done by our developers.
                        </p>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

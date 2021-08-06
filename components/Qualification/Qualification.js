import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  UilGraduationCap,
  UilBriefcaseAlt,
  UilCalendarAlt,
} from "@iconscout/react-unicons";

export default function Qualification() {
  return (
    <section className="section qualification " id="qualification">
      <h2 className="section__title font-medium">Qualification</h2>
      <span className="section__subtitle">My personzl journey</span>
      <Tabs>
        <div className="qualification__container container">
          <TabList className="qualification__tabs">
            <Tab>
              <div className="qualification__botton button-b-flex flex flex-col items-center font-medium">
                <UilGraduationCap className="qualification__icon" />
                Education
              </div>
            </Tab>
            <Tab>
              <div className="qualification__botton button-b-flex flex flex-col items-center font-medium">
                <UilBriefcaseAlt className="qualification__icon" />
                Work
              </div>
            </Tab>
          </TabList>
          <div className="qualification__section">
            <TabPanel>
              <div className="qualification__content font-normal">
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Web developer</h3>
                    <span className="qualification__subtitle">
                      Peru - University of California
                    </span>
                    <div className="qualification__calendar">
                      <UilCalendarAlt />
                      2018 - 2022
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">Web developer</h3>
                    <span className="qualification__subtitle">
                      Peru - University of California
                    </span>
                    <div className="qualification__calendar">
                      <UilCalendarAlt />
                      2018 - 2022
                    </div>
                  </div>
                </div>

                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Web developer</h3>
                    <span className="qualification__subtitle">
                      Peru - University of California
                    </span>
                    <div className="qualification__calendar">
                      <UilCalendarAlt />
                      2018 - 2022
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    {/* <span className="qualification__line"></span> */}
                  </div>
                  <div>
                    <h3 className="qualification__title">Web developer</h3>
                    <span className="qualification__subtitle">
                      Peru - University of California
                    </span>
                    <div className="qualification__calendar">
                      <UilCalendarAlt />
                      2018 - 2022
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="qualification__content">
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Frontend developer</h3>
                    <span className="qualification__subtitle">Google</span>
                    <div className="qualification__calendar">
                      <UilCalendarAlt />
                      2018 - 2022
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">Web developer</h3>
                    <span className="qualification__subtitle">
                      Peru - University of California
                    </span>
                    <div className="qualification__calendar">
                      <UilCalendarAlt />
                      2018 - 2022
                    </div>
                  </div>
                </div>

                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Web developer</h3>
                    <span className="qualification__subtitle">
                      Peru - University of California
                    </span>
                    <div className="qualification__calendar">
                      <UilCalendarAlt />
                      2018 - 2022
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    {/* <span className="qualification__line"></span> */}
                  </div>
                </div>
              </div>
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </section>
  );
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ItemOne from "../components/pricing-item/itemOne";
import ItemTwo from "../components/pricing-item/itemTwo";

export class Pricing extends Component {
    render() {
        return (
            <>
                <section id="price" className="pricing-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>{this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b></h2>
                            <p>{this.props.sectionContent}</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="price-tabs">
                                    <Tabs>
                                        <TabList>
                                            <Tab>Monthly</Tab>
                                            <Tab>Yearly</Tab>
                                        </TabList>

                                        <TabPanel>
                                            {/* ItemOne Component from src/components/pricing-item/itemOne */}
                                            <ItemOne />
                                        </TabPanel>
                                        <TabPanel>
                                            {/* ItemOne Component from src/components/pricing-item/itemOne */}
                                            <ItemTwo />
                                        </TabPanel>
                                    </Tabs>
                                </div>       
                            </div>       
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

Pricing.PropsTypes = {
    sectionTitle: PropTypes.string,
    sectionTitleSpan: PropTypes.string,
    sectionContent: PropTypes.string,
}

Pricing.defaultProps = {
    sectionTitle: "Our Latest",
    sectionTitleSpan: "Pricing",
    sectionContent: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
}

export default Pricing
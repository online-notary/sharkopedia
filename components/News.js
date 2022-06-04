import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'

export class News extends Component {
    render() {

        // Start News Loop
        const newsdata = this.props.newssData.map((news, index ) =>(
            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                <div className="single-blog-post">
                    <div className="post-thumbnail">
                        <a href={news.imglink} target="_blank" rel='noreferrer'>
                            <Image 
                                src={news.image} 
                                alt="blog-img" 
                                width={600} 
                                height={400}
                            />
                        </a>
                    </div>
                    <div className="post-content">
                        <h3><a href={news.titlelink} target="_blank" rel='noreferrer'>{news.title}</a></h3>
                        <a href={news.btnlink} className="read-more" target="_blank" rel='noreferrer'>{news.btnname}</a>
                    </div>
                </div>
            </div>
        ));
        // End News Loop

        return (
            <>
                <section id="blog" className="blog-area ptb-100 border-top">
                    <div className="container">
                        <div className="section-title">
                            <h2>{this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b></h2>
                            <p>{this.props.sectionContent}</p>
                        </div>

                        <div className="row justify-content-center">
                            {newsdata}
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
News.PropsTypes = {
    sectionTitle: PropTypes.string,
    sectionTitleSpan: PropTypes.string,
    sectionContent: PropTypes.string,
    newssData: PropTypes.array,

}
News.defaultProps = {
    sectionTitle: "Our Latest",
    sectionTitleSpan: "News",
    sectionContent: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    newssData:[
        {
            imglink: "#",
            image: "/img/blog-img1.jpg",
            titlelink: "#",
            title: "Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            btnlink: "#",
            btnname: "Read more",
        },
        {
            imglink: "#",
            image: "/img/blog-img2.jpg",
            titlelink: "#",
            title: "Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            btnlink: "#",
            btnname: "Read more",
        },
        {
            imglink: "#",
            image: "/img/blog-img3.jpg",
            titlelink: "#",
            title: "Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            btnlink: "#",
            btnname: "Read more",
        }
    ]
}
export default News

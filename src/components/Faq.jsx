import { base_url } from '@/utils/const';
import React from 'react';

const Faq = ({ data }) => {
    // Group the items by their sub_title (e.g., "flight" and "visa")
    const groupBySubTitle = (items) => {
        return items.reduce((result, item) => {
            const group = item.sub_title || 'others'; // Default to 'others' if no sub_title
            if (!result[group]) {
                result[group] = [];
            }
            result[group].push(item);
            return result;
        }, {});
    };

    const groupedItems = groupBySubTitle(data?.get_section_items || []);

    return (
        <>
            <div className="accordion-with-tab-section mb-90">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-6">
                            <div className="accordion-image">
                                <img src={base_url + data?.thumb_image} alt={data?.title || 'FAQ Image'} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="accordion-with-tab-content">
                                <h2>{data?.title}</h2>
                                <div className="accordion-with-tab-wrap">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        {Object.keys(groupedItems).map((group, index) => (
                                            <li className="nav-item" key={index} role="presentation">
                                                <button
                                                    className={`nav-link ${index === 0 ? 'active' : ''}`}
                                                    id={`tab-${index}`}
                                                    data-bs-toggle="tab"
                                                    data-bs-target={`#tab-pane-${group}`}
                                                    type="button"
                                                    role="tab"
                                                    aria-controls={`tab-pane-${group}`}
                                                    aria-selected={index === 0 ? 'true' : 'false'}
                                                >
                                                    {group.charAt(0).toUpperCase() + group.slice(1)}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        {Object.entries(groupedItems).map(([group, items], groupIndex) => (
                                            <div
                                                className={`tab-pane fade ${groupIndex === 0 ? 'show active' : ''}`}
                                                id={`tab-pane-${group}`}
                                                role="tabpanel"
                                                aria-labelledby={`tab-${group}`}
                                                key={groupIndex}
                                            >
                                                <div className="faq-content">
                                                    <div className="accordion" id={`accordion-${group}`}>
                                                        {items.map((item, itemIndex) => (
                                                            <div className="accordion-item" key={itemIndex}>
                                                                <h2 className="accordion-header" id={`faqheading-${group}-${itemIndex}`}>
                                                                    <button
                                                                        className="accordion-button"
                                                                        type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target={`#faqcollapse-${group}-${itemIndex}`}
                                                                        aria-expanded={itemIndex === 0 ? 'true' : 'false'}
                                                                        aria-controls={`faqcollapse-${group}-${itemIndex}`}
                                                                    >
                                                                        {`${itemIndex + 1}. ${item.title}`}
                                                                    </button>
                                                                </h2>
                                                                <div
                                                                    id={`faqcollapse-${group}-${itemIndex}`}
                                                                    className={`accordion-collapse collapse ${itemIndex === 0 ? 'show' : ''}`}
                                                                    aria-labelledby={`faqheading-${group}-${itemIndex}`}
                                                                    data-bs-parent={`#accordion-${group}`}
                                                                >
                                                                    <div className="accordion-body">
                                                                        {item.description}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Faq;

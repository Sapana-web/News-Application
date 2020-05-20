import React, { Component } from 'react';

class NewsData extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            searchWord: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        const { list } = nextProps;    
        this.setState({news: list})
    } 
  
    getCardElements = (news) => {
        return news.map((newsItem, index) => {
            return (
                <div className="row card mb-10" style={{ marginTop: '80px' }}>                           
                <div className="row col-12 card-body bg-light">
                     <div className="col-3">
                    <img src={newsItem.imgSrc} className="mx-auto d-block" alt="Cinque Terre" />
                    </div>  
                    <div className="col-9">   
                    <div className="text-center">
                            <code><p className="card-text"> {newsItem.newsdate} </p></code>                                   
                             <p className="card-text text-body"> {newsItem.description} </p>                                            
                             Read more on <a href={newsItem.url}>{newsItem.name}</a>
                     </div>
                    </div>
               </div>     
               </div>  
          );
        })
    }

    render() {
        const { news } = this.state
        
        const newsElements = this.getCardElements(news)
        return (
            <React.Fragment>
                <div className="table-responsive">
                    <table className="tasks-list table table-bordered">
                        <tbody>
                            {newsElements}
                        </tbody>
                    </table>
                </div>
               </React.Fragment>

        );           
    }
}

export default NewsData;
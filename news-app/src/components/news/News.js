import React, {Component} from 'react'
import axios from '../../axios'
import NewsList from './NewsList';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            searchWord:''
        };
        }

        getNewsData() {
            axios
                .get('',{})
                .then(res => {
                    console.log(res.data)
                    const data = res.data.value
                    // data.map(newsItems => this.addNewsDetails(newsItems))
                    this.setNewsDetails(data)
                    })
                .catch((error) => {
                    console.log(error)
                })
        }

        componentDidMount(){
            this.getNewsData()
        }

        setNewsDetails = (newsData) => {
            let newsListArray = [];
            for(let i=0; i< newsData.length;i++){
                let tempObj = {
                    imgSrc :newsData[i].image.thumbnail.contentUrl ,
                    newsdate:newsData[i].datePublished,
                    description : newsData[i].description,
                    url: newsData[i].url,
                    name : newsData[i].name
                };
             newsListArray.push(tempObj);
            }
            this.setState({ news: newsListArray })    
        }
    
        render() {
            return (
                <div>
                <NewsList list={this.state.news} />                  
                </div>
            );
        }
    }
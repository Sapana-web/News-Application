import React, {Component} from 'react'
import NewsData from './NewsData';
import Pagination from "react-js-pagination";

export default class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allNewList:[],
            news: [],
            searchWord:'',
            activePage: 1,
            totalNewsCount: 0,
            pageCount: 3
        };
        this.handlePageChange.bind(this);
        this.inputRef= React.createRef();
        }       

    componentDidMount(){this.inputRef.current.focus();}
 
    componentWillReceiveProps(nextProps) {
            const { list } = nextProps; 
            this.setState({
                totalNewsCount : list.length ,
                allNewList: list})
            this.handlePageChange(1,list);          
        }   

    searchTaskByVal = (event) => {
        let searchWord = event.target.value;
        let { list } = this.props;
        let filteredList = list.filter(this.checkSearchWord, searchWord);
    
        this.setState({
            news: filteredList
        })
    }
        
    checkSearchWord(newItem) {
        return newItem.description.toLowerCase().includes(this)
    }

    handlePageChange(pageNumber,list) {
        const recordIndex = (pageNumber - 1) * this.state.pageCount;
        const tempList = list ? Object.assign(list,[]) : this.state.allNewList ;

        const newsList = tempList.splice(recordIndex, this.state.pageCount);       
        
        this.setState({
            news: newsList,
            activePage: pageNumber
        })
      }
 

    render() {
        return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
              <form className="form-inline" action="/action_page.php">
              <h2 className="navbar-brand">News Application</h2>            
                <input className="form-control mr-sm-2" type="text" placeholder="Search news.." ref = {this.inputRef} onChange={this.searchTaskByVal}/>
                </form>
            </nav>
            <NewsData list={this.state.news}/>
            <Pagination
            hideFirstLastPages
            activePage={this.state.activePage}
            itemsCountPerPage={this.state.pageCount}
            totalItemsCount={this.state.totalNewsCount}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange.bind(this)}
          />
         </div>
    );
}
}

import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from "axios";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ResponsiveAppBar from '../navbar';

import './Home.css';
import CuisineListings from '../components/cards/CuisineListings';

const styles = {
    paperContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFC95F'
    }
};

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
        label: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
        label: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        label: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { label: 'Forrest Gump', year: 1994 },
    { label: 'Inception', year: 2010 },
    {
        label: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: 'Goodfellas', year: 1990 },
    { label: 'The Matrix', year: 1999 },
    { label: 'Seven Samurai', year: 1954 },
    {
        label: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { label: 'City of God', year: 2002 },
    { label: 'Se7en', year: 1995 },
    { label: 'The Silence of the Lambs', year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: 'Life Is Beautiful', year: 1997 },
    { label: 'The Usual Suspects', year: 1995 },
    { label: 'Léon: The Professional', year: 1994 },
    { label: 'Spirited Away', year: 2001 },
    { label: 'Saving Private Ryan', year: 1998 },
    { label: 'Once Upon a Time in the West', year: 1968 },
    { label: 'American History X', year: 1998 },
    { label: 'Interstellar', year: 2014 },
    { label: 'Casablanca', year: 1942 },
    { label: 'City Lights', year: 1931 },
    { label: 'Psycho', year: 1960 },
    { label: 'The Green Mile', year: 1999 },
    { label: 'The Intouchables', year: 2011 },
    { label: 'Modern Times', year: 1936 },
    { label: 'Raiders of the Lost Ark', year: 1981 },
    { label: 'Rear Window', year: 1954 },
    { label: 'The Pianist', year: 2002 },
    { label: 'The Departed', year: 2006 },
    { label: 'Terminator 2: Judgment Day', year: 1991 },
    { label: 'Back to the Future', year: 1985 },
    { label: 'Whiplash', year: 2014 },
    { label: 'Gladiator', year: 2000 },
    { label: 'Memento', year: 2000 },
    { label: 'The Prestige', year: 2006 },
    { label: 'The Lion King', year: 1994 },
    { label: 'Apocalypse Now', year: 1979 },
    { label: 'Alien', year: 1979 },
    { label: 'Sunset Boulevard', year: 1950 },
    {
        label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { label: 'The Great Dictator', year: 1940 },
    { label: 'Cinema Paradiso', year: 1988 },
    { label: 'The Lives of Others', year: 2006 },
    { label: 'Grave of the Fireflies', year: 1988 },
    { label: 'Paths of Glory', year: 1957 },
    { label: 'Django Unchained', year: 2012 },
    { label: 'The Shining', year: 1980 },
    { label: 'WALL·E', year: 2008 },
    { label: 'American Beauty', year: 1999 },
    { label: 'The Dark Knight Rises', year: 2012 },
    { label: 'Princess Mononoke', year: 1997 },
    { label: 'Aliens', year: 1986 },
    { label: 'Oldboy', year: 2003 },
    { label: 'Once Upon a Time in America', year: 1984 },
    { label: 'Witness for the Prosecution', year: 1957 },
    { label: 'Das Boot', year: 1981 },
    { label: 'Citizen Kane', year: 1941 },
    { label: 'North by Northwest', year: 1959 },
    { label: 'Vertigo', year: 1958 },
    {
        label: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { label: 'Reservoir Dogs', year: 1992 },
    { label: 'Braveheart', year: 1995 },
    { label: 'M', year: 1931 },
    { label: 'Requiem for a Dream', year: 2000 },
    { label: 'Amélie', year: 2001 },
    { label: 'A Clockwork Orange', year: 1971 },
    { label: 'Like Stars on Earth', year: 2007 },
    { label: 'Taxi Driver', year: 1976 },
    { label: 'Lawrence of Arabia', year: 1962 },
    { label: 'Double Indemnity', year: 1944 },
    {
        label: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { label: 'Amadeus', year: 1984 },
    { label: 'To Kill a Mockingbird', year: 1962 },
    { label: 'Toy Story 3', year: 2010 },
    { label: 'Logan', year: 2017 },
    { label: 'Full Metal Jacket', year: 1987 },
    { label: 'Dangal', year: 2016 },
    { label: 'The Sting', year: 1973 },
    { label: '2001: A Space Odyssey', year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: 'Toy Story', year: 1995 },
    { label: 'Bicycle Thieves', year: 1948 },
    { label: 'The Kid', year: 1921 },
    { label: 'Inglourious Basterds', year: 2009 },
    { label: 'Snatch', year: 2000 },
    { label: '3 Idiots', year: 2009 },
    { label: 'Monty Python and the Holy Grail', year: 1975 },
];


class Home extends Component {
    constructor(props) {
        super(props);
    }


    // componentDidMount() {
    //     this.fetchCourses();
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.page !== this.state.page) {
    //         //console.log("page", this.state.page)
    //         this.fetchCourses();
    //     }
    // }

    // setSelectedUniversity = (data) => {
    //     this.setState({ selectedUniversity: data })
    // }

    // setSelectedDiscipline = (data) => {
    //     this.setState({ selectedDiscipline: data })
    // }

    // setSearchQuery = (data) => {
    //     // console.log("search: ",data.target.value)
    //     this.setState({ search: data.target.value })
    // }

    // setPage = (data) => {
    //     this.setState({ page: data })
    // }

    // setPageCount = (data) => {
    //     this.setState({ pageCount: data })
    // }

    // setTotal = (data) => {
    //     this.setState({ total: data })
    // }

    // setLoading = (data) => {
    //     this.setState({ loading: data })
    // }

    // getUrlQuery = () => {
    //     let uniFilter = "&university="
    //     for (let i = 0; i < this.state.selectedUniversity.length; i++) {
    //         uniFilter += `${this.state.selectedUniversity[i].value}`;
    //         if (i < this.state.selectedUniversity.length - 1) {
    //             uniFilter += ','
    //         }
    //     }

    //     let disciplineFilter = "&discipline="
    //     for (let i = 0; i < this.state.selectedDiscipline.length; i++) {
    //         disciplineFilter += `${this.state.selectedDiscipline[i].value}`;
    //         if (i < this.state.selectedDiscipline.length - 1) {
    //             disciplineFilter += ','
    //         }
    //     }
    //     return `https://dev.silvi.io/api/undergraduate-programmes?search=${this.state.search}&page=${this.state.page}${uniFilter}${disciplineFilter}`;
    // }

    // resetForm = () => {
    //     this.setState({
    //         ...this.state,
    //         selectedUniversity: [],
    //         selectedDiscipline: [],
    //         search: "",
    //         page: 1,
    //     }, () => {
    //         this.fetchCourses();
    //     })
    // }

    // handleSubmit = () => {
    //     this.setState({
    //         ...this.state,
    //         page: 1,
    //     }, () => {
    //         this.fetchCourses();
    //     })
    // }

    // fetchMe = () => {
    //     axios.get(`https://dev.silvi.io/api/me`,
    //         { withCredentials: true })
    //         .then(response => {
    //             // this.setRiasec_1(response.data.profile.interest_1.name)
    //             // this.setRiasec_2(response.data.profile.interest_2.name)
    //             // this.setRiasec_3(response.data.profile.interest_3.name)

    //             return response.data
    //         })
    //         .catch(error => {
    //             console.error('Error', error);
    //         });
    // }

    // fetchCourses = () => {
    //     const URL = this.getUrlQuery();
    //     axios.get(URL, { withCredentials: true })
    //         .then(response => {
    //             this.setCourses_(response.data.results)
    //             this.fetchMe();
    //             let contentRange = response.headers["content-range"]
    //             let total = contentRange.split("/")[1]
    //             let length = response.data.page_size
    //             const total_page = Math.ceil(total / length)
    //             this.setPageCount(total_page)
    //             this.setTotal(contentRange.split("/")[1])
    //         })
    //         .catch(error =>
    //             console.error('Error', error));
    // }

    render() {
        return (
            <Container fluid mx="3px" id="establishments" >
                <ResponsiveAppBar />

                <div className="flex-container align-content-sm-stretch" id="establishment-header" style={Object.assign({}, styles.paperContainer, { width: "100%", margin: 0, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' })}>
                    <h1 style={{ fontSize: "28px", textAlign: 'center' }}>The quickest way to find the perfect bite</h1>
                    <div className="flex-container align-content-sm-stretch" id="establishment-subheader">
                        <h4 style={{ fontSize: "18px", paddingTop: '23px', paddingBottom: '29px' }}>Satisfy your cravings now!</h4>
                    </div>
                </div>


                {/* <Row>
                            <Col className="col-12 col-md-3">
                                <UniversityFilter
                                    setSelectedUniversity={this.setSelectedUniversity}
                                    selectedUniversity={this.state.selectedUniversity}
                                /></Col>
                            <Col className="col-12 col-md-3">
                                <DisciplineFilter
                                    setSelectedDiscipline={this.setSelectedDiscipline}
                                    selectedDiscipline={this.state.selectedDiscipline}
                                /></Col>
                            <Col className="col-12 col-md-3">
                                <SearchProgrammes
                                    setSearchQuery={this.setSearchQuery}
                                    search={this.state.search}
                                /></Col>
                            <Col className="col-12 col-md-3" style={{ padding: "20px", marginBottom: "1em" }}>
                                <Button className="submit-filter position-absolute bottom-0 end-5 " variant="contained" style={{ marginLeft: "10px", marginRight: "10px", fontSize: "13px" }}
                                    onClick={() => { this.handleSubmit() }}>
                                    Submit
                                </Button>
                                <Button className="submit-filter position-absolute bottom-0 end-0" size="lg" variant="outlined" style={{ marginLeft: "10px", marginRight: "40px", fontSize: "13px" }}
                                    onClick={this.resetForm}>
                                    Reset
                                </Button>
                            </Col>
                        </Row> */}

                <div className="container">
                    <div className="subtitile">
                        <p style={{ fontSize: "16px", paddingTop: "1em", paddingBottom:'1em', textAlign: 'left', paddingLeft: '9em' }}>Hi <b>compFuddie!</b> Here are the list of food choics you may like based on your preference and ratings!</p>
                    </div>

                    <Row style={{ marginLeft: '9em', paddingBottom: '2em' }}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Search for Top Rated Cuisines" />}
                        />
                    </Row>

                    <CuisineListings />

                    {/* <ProgrammeListings
                        selectedUniversity={this.state.selectedUniversity}
                        selectedDiscipline={this.state.selectedDiscipline}
                        search={this.state.search}
                        courses_={this.state.courses_}
                        setCourses_={this.setCourses_}
                        page={this.state.page}
                        setPage={this.setPage}
                        pageCount={this.state.pageCount}
                    /> */}
                </div>
            </Container>
        )
    }
}

export default Home;
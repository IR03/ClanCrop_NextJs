import React, { useEffect, useState } from 'react';
import { Container, Form, InputGroup, Pagination, Table } from 'react-bootstrap';
import Header from '../Header/Header';
import { FiSearch } from "react-icons/fi";
import { MdOutlineAddCircle } from "react-icons/md";
import ApiDataService from '../../../ApiDataService/ApiDataService';

const MainPage = () => {

    useEffect(() => {
        getBlogs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [apiData, setApiData] = useState([]);


    const getBlogs = async () => {
        try {

            const res = await ApiDataService.getForumData();
            setApiData(res?.data);

        } catch (error) {
        }
    }

    //  filter
    const [searchFilter, setSearchFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [finalData, setFinalData] = useState([]);


    const [localPage, setLocalPage] = useState(1);
    const rowsPerPage = 3;

    let pageCount = Math.round(finalData?.length / rowsPerPage);

    // ===========================Pagination ===================

    let active = localPage;
    let items = [];
    for (let number = 1; number <= pageCount; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number == active}
                onClick={() => setLocalPage(number)}
            >
                {number}
            </Pagination.Item>
        );
    }

    console.log(pageCount);


    useEffect(() => {


        // check1 search filter
        let searchFilterData = apiData.filter((query) => {
            return (
                query.title.toString().toLowerCase().includes(searchFilter) ||
                query.category.toString().toLowerCase().includes(searchFilter) ||
                query.status.toString().toLowerCase().includes(searchFilter)
            );
        });

        if (categoryFilter == "all") {
            setFinalData(searchFilterData);
        }
        else {

            let categoryFilterData = searchFilterData.filter((categoryData) => {
                return (
                    categoryData.category.toString().toLowerCase().includes(categoryFilter.toLowerCase())
                    // categoryData.category.toString().toLowerCase().match(categoryFilter.toLowerCase()) 

                );
            });

            setFinalData(categoryFilterData);

        }

    }, [searchFilter, categoryFilter, apiData]);

    return (
        <div className='mainPage'>
            <Header />
            <section className='heroSection sesction_pt7 sesction_pb7'>
                <Container>
                    <div className="heroSection_wrapper">
                        <div className="title">
                            <h1>
                                Ideal solution to
                                <br />
                                enhance <span className='cl_gold bold'>your business.</span>
                            </h1>
                        </div>
                        <div className="searchbar sesction_pt">
                            <Form >
                                <InputGroup>
                                    <Form.Control
                                        onChange={(e) => setSearchFilter(e.target.value)}
                                        placeholder="Enter Keywords"
                                    />
                                    <button type="submit" className='border-0 submit_button px-4 text-uppercase'>
                                        <FiSearch size={25} className='cl_pm me-2' />
                                        Search
                                    </button>
                                </InputGroup>
                            </Form>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="tableData sesction_pt sesction_pb">
                <Container>
                    <div className="filterBar">
                        <div className="d-flex flex-wrap justify-content-between align-items-center">

                            <div className="categorySelect">
                                <Form.Select aria-label="Default select example"
                                    onChange={(e) => setCategoryFilter(e.target.value)}>
                                    <option value="all">All Categories</option>
                                    {
                                        apiData?.map((catData, index) => (
                                            <option key={index} value={catData?.category}>{catData?.category}</option>
                                        ))
                                    }
                                    {/* <option value="Management">Management</option>
                                    <option value="Software">Software</option>
                                    <option value="Inventory">Inventory</option> */}
                                </Form.Select>
                            </div>

                            <div className="tab d-flex flex-wrap">
                                <div className='tabSelect d-flex  me-5'>
                                    <button className='me-3 active'>latest</button>
                                    <button className='me-3'>unread</button>
                                    <button className='me-3'>rising</button>
                                    <button className='me-3'>Most liked</button>
                                </div>

                                <div className="createNew">
                                    <button className='smallBtn common_round5 cl_pm fs14 py-3 text-uppercase d-flex'>
                                        <MdOutlineAddCircle size={20} className='me-1' />
                                        Create New </button>
                                </div>
                            </div>

                        </div>

                        <div className="table_content sesction_pt">
                            <Table responsive >
                                <thead >
                                    <tr>
                                        <th >Topic</th>
                                        <th>Category</th>
                                        <th>User</th>
                                        <th>Replies</th>
                                        <th>Views</th>
                                        <th>Activity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        finalData?.slice(
                                            rowsPerPage * (localPage - 1),
                                            rowsPerPage * (localPage - 1) + rowsPerPage
                                        ).map((data) => (
                                            <tr key={data.id}>
                                                <td>
                                                    <p className='fs20 medium '>
                                                        {data.title}
                                                    </p>
                                                    <div className="d-flex flex-wrap">
                                                        {
                                                            data?.tag?.map((category, index) => (

                                                                <div key={index} className="tag me-2">
                                                                    <button style={{ backgroundColor: `${category.color}` }}>{category.name}</button>
                                                                </div>

                                                            ))
                                                        }
                                                    </div>

                                                </td>
                                                <td className='cl_pm'>{data.category}</td>
                                                <td>{data.user}+</td>
                                                <td>{data.replies}</td>
                                                <td>{data.views}</td>
                                                <td>{data.activity} days</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>


                        </div>
                    </div>
                </Container>
            </section>
            <div className="bg-danger">

               
                <Pagination className='justify-content-center'>{items}</Pagination>
            </div>
        </div>
    );
};

export default MainPage;
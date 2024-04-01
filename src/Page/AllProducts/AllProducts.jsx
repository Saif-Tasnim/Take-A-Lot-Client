import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import Chart.js
import { Link } from 'react-router-dom';
import { HiMiniChevronDoubleLeft, HiMiniChevronDoubleRight, HiMiniMagnifyingGlass, HiStar } from 'react-icons/hi2';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Product from './Product';


const AllProducts = () => {
    const priceOptions = [
        { id: 1, value: 150, label: 'R 150' },
        { id: 3, value: 500, label: 'R 500' },
        { id: 4, value: 800, label: 'R 800' },
        { id: 5, value: 1000, label: 'R 1,000' },
        { id: 6, value: 2000, label: 'R 2,000' },
        { id: 7, value: 3000, label: 'R 3,000' },
        { id: 8, value: 5000, label: 'R 5,000' },
        { id: 9, value: 8000, label: 'R 8,000' },
        { id: 10, value: 12000, label: 'R 12,000' },
        { id: 11, value: 25000, label: 'R 25,000' },
        { id: 13, value: 50000, label: 'R 5,0000' },
    ];
    const initialMin = { label: 'Min', value: -1 };
    const initialMax = { label: 'Max', value: -2 };
  
    const [selectedMin, setSelectedMin] = useState(initialMin);
    const [selectedMax, setSelectedMax] = useState(initialMax); // Initial value for Max dropdown

    const [range, setRange] = useState({ min: 150, max: 50000 }); // Initial range values

    // const [selectedMin, setSelectedMin] = useState(initialMin);
    // const [selectedMax, setSelectedMax] = useState(initialMax);
    const [selectedRating, setRating] = useState([]);
    const [selectedAvailability, setAvailability] = useState([]);
    const [selectedDeals, setDeals] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [selectedSort, setSelectedSort] = useState([]);
    // console.log(selectedSort);
    const [searchBrands, setSearchBrand] = useState("");
    // console.log(searchBrands);

    const [totalProducts, setTotalProducts] = useState(0);
    const [categoryList, setCategoryList] = useState([]);
    const [demoBrandList, setDemoBrandList] = useState([]);
    const [view, setView] = useState("grid")
    const [filterOpen1, setFilterOpen1] = useState(true);
    const [filterOpen2, setFilterOpen2] = useState(true);
    const [filterOpen3, setFilterOpen3] = useState(true);
    const [filterOpen4, setFilterOpen4] = useState(true);
    const [filterOpen5, setFilterOpen5] = useState(true);
    const [showList, setShowList] = useState(false)
    // console.log(totalProducts);
    const [products, setProducts] = useState([]);
    // console.log(products);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://take-a-lot-server-two.vercel.app/total-products")
            .then(res => res.json())
            .then(data => setTotalProducts(data.totalProduct))
    }, [])

    useEffect(() => {
        fetch('./brands.json')
            .then((res) => res.json())
            .then((data) => {
                // Filter the brands based on the search input or show all when search is empty
                const filteredBrands = searchBrands
                    ? data.filter((brand) =>
                        brand.Brand.toLowerCase().includes(searchBrands.toLowerCase())
                    )
                    : data;
                setDemoBrandList(filteredBrands);
            });
    }, [searchBrands]);

    // const [currentPage, setCurrentPage] = useState(0);
    // const itemPerPage = 100;
    // const totalPage = Math.ceil(totalProducts / itemPerPage);
    // const pageNumbers = [...Array(totalPage).keys()]


    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 20;
    const totalPage = Math.ceil(totalProducts / itemPerPage);
    const pagesToShow = 5;

    const pageRangeStart = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    const pageRangeEnd = Math.min(totalPage, pageRangeStart + pagesToShow - 1);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };


    useEffect(() => {
        fetchHouses();
    }, [currentPage, itemPerPage]);

    const fetchHouses = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://take-a-lot-server-two.vercel.app/all-products?page=${currentPage}&limit=${itemPerPage}`);
            setProducts(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetch("./categoryList.json")
            .then(res => res.json())
            .then(data => setCategoryList(data))
    }, [])



    

    useEffect(() => {
        const generateChartData = () => {
            // Check if "Min" or "Max" is selected
            if (selectedMin.value === initialMin.value || selectedMax.value === initialMax.value) {
              // Handle the case when "Min" or "Max" is selected
              // For example, you can return the full price range data
              return {
                labels: priceOptions.map((option) => option.label),
                datasets: [
                  {
                    label: 'Price Range',
                    backgroundColor: '#0B7ABF36',
                    borderColor: '#0B79BF',
                    borderWidth: 1,
                    data: priceOptions.map((option) => option.value),
                  },
                ],
              };
            }
          
            // Handle other cases where specific price ranges are selected
            const minIndex = priceOptions.findIndex((option) => option.value === selectedMin.value);
            const maxIndex = priceOptions.findIndex((option) => option.value === selectedMax.value);
            const chartData = priceOptions.slice(minIndex, maxIndex + 1);
            const reversedLabels = chartData.map((option) => option.label).reverse(); // Reverse the labels
          
            return {
              labels: reversedLabels,
              datasets: [
                {
                  label: 'Price Range',
                  backgroundColor: '#0B7ABF36',
                  borderColor: '#0B79BF',
                  borderWidth: 1,
                  data: chartData.map((option) => option.value),
                },
              ],
            };
          };
    
        const renderChart = (chartId, data) => {
          const ctx = document.getElementById(chartId);
          let chartInstance = null;
    
          if (ctx) {
            // Destroy the previous chart instance if it exists
            Chart.getChart(chartId)?.destroy();
    
            // Create a new chart instance
            chartInstance = new Chart(ctx, {
              type: 'bar',
              data: data,
              options: {
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                    beginAtZero: true,
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              },
            });
          }
        };
    
        // Render the LG chart
        renderChart('lg-chart', generateChartData());
    
        // Render the mobile chart
        renderChart('mobile-chart', generateChartData());
      }, [selectedMin, selectedMax]);

 


    const handleRangeChange = (newRange) => {
        setRange(newRange);
        console.log(newRange);
        // Update selectedMin and selectedMax based on the new range values
        const minOption = priceOptions.find((option) => option.value <= newRange.min);
        // console.log(minOption);
        const maxOption = priceOptions.find((option) => option.value >= newRange.max);
        // console.log(maxOption);
        setSelectedMin(minOption || 150);
        setSelectedMax(maxOption || 50000);
    };
    // console.log(selectedMax, selectedMin);
    return (
        <section className='-z-30'>
            <div className='lg:hidden grid grid-cols-3 bg-white items-center gap-24 justify-center py-4 px-3 mb-3'>

                <div className="sort-drawer drawer">
                    <input id="my-drawer1" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer1" className="px-12 py-3 bg-gray-200 rounded-md drawer-button text-sm font-semibold text-gray-700 w-full">Sort</label>
                    </div>
                    <div className="drawer-side z-50">
                        <label htmlFor="my-drawer1" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-72 min-h-full bg-white text-base-content">
                            <div className='sort-menu'>
                                <p className='py-2 px-2 font-semibold text-base border-b mb-3'>Sort by</p>
                                <label className="cursor-pointer label relative">
                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedSort.find(sr => sr === "Relevance") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Relevance</span>
                                </label>

                                <label className="cursor-pointer label relative" onClick={() => setSelectedSort([...selectedSort, "Descending"])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedSort.find(sr => sr === "Descending") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Price: High to Low</span>
                                </label>

                                <label className="cursor-pointer label relative" onClick={() => setSelectedSort([...selectedSort, "Ascending"])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedSort.find(sr => sr === "Ascending") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Price: Low to High</span>
                                </label>

                                <label className="cursor-pointer label relative" onClick={() => setSelectedSort([...selectedSort, "New"])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedSort.find(sr => sr === "New") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Newest Arrivals</span>
                                </label>



                                {/* <select className='border px-2 py-2 rounded bg-white text-xs font-semibold'
                                    onChange={(e) => setSelectedSort(e.target.value)}

                                >
                                    <option defaultValue="Relevance">Relevance</option>
                                    <option value="Descending">Price: High to Low</option>
                                    <option value="Ascending">Price: Low to High</option>
                                    <option value="New">Newest Arrivals</option>

                                </select> */}

                            </div>

                        </ul>
                    </div>
                </div>



                <div className="filter-drawer drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">

                        <label htmlFor="my-drawer" className="px-12 py-3 bg-gray-200 rounded-md drawer-button text-sm font-semibold text-gray-700">Filter</label>
                    </div>
                    <div className="drawer-side z-50">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu w-[340px] min-h-full bg-white text-base-content">

                            <div className='min-w-full mx-auto'>
                                <div className='category-list bg-white shadow w-full rounded'>
                                    <p className='font-semibold text-black px-3 pt-4 pb-3 border-b text-[14px]'>Refine by Category</p>

                                    <Link to="/all" className='  text-primary font-normal text-[14px] inline-block w-full px-3 py-2 bg-primary bg-opacity-10'>All Category</Link>

                                    <ul className='w-full'>

                                        {
                                            categoryList.slice(0, showList ? categoryList.length : 4).map(listItem => <li key={listItem?.id}>
                                                <Link to={listItem?.path} className='py-3 px-7 text-black font-normal text-[14px] inline-block w-full hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-all duration-500'>{listItem?.category}</Link>
                                            </li>)
                                        }
                                        {
                                            showList ? <li onClick={() => setShowList(!showList)}>
                                                <button className='text-left py-3 px-7 font-normal text-[12px] inline-block w-full text-primary hover:bg-primary hover:bg-opacity-10 transition-all duration-500'>Show less</button>
                                            </li> : <li onClick={() => setShowList(!showList)}>
                                                <button className='text-left py-3 px-7 font-normal text-[12px] inline-block w-full text-primary hover:bg-primary hover:bg-opacity-10 transition-all duration-500'>Show more</button>
                                            </li>
                                        }
                                    </ul>

                                </div>

                                <div className='bg-white my-3 shadow rounded'>
                                    <p className='font-semibold text-black px-3 pt-4 pb-3 border-b text-[14px]'>Filter</p>

                                    <div className="collapse collapse-plus" >
                                        <input type="checkbox" defaultChecked={filterOpen1 ? true : false} onClick={() => setFilterOpen1(!filterOpen1)} />
                                        <div className="collapse-title text-sm font-semibold border-b border-b-gray-200">
                                            Price
                                        </div>
                                        <div className="collapse-content py-2">
                                            <div>

                                                <div className="chart bg-gray-100 rounded">
                                                <canvas id="lg-chart" />
                                                </div>

                                                <div className="range-selector">
                                                    <Slider
                                                        min={150}
                                                        max={50000}
                                                        value={[range.min, range.max]}
                                                        onChange={(newValues) => handleRangeChange({ min: newValues[0], max: newValues[1] })}
                                                        range
                                                    />
                                                </div>

                                                <div className="dropdowns w-full inline-flex items-center justify-around pt-2">
                                                    <select className='border px-2 py-2 rounded bg-gray-100 text-xs font-semibold'
                                                        value={selectedMin.value}
                                                        onChange={(e) =>
                                                            setSelectedMin(
                                                                priceOptions.find((option) => option.value === +e.target.value)
                                                            )
                                                        }
                                                    >
                                                        <option value={initialMin.value} disabled={true}>{initialMin.label}</option>
                                                        {priceOptions.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </select>

                                                    <select className='border px-2 py-2 rounded bg-gray-100 text-xs font-semibold'
                                                        value={selectedMax.value}
                                                        onChange={(e) =>
                                                            setSelectedMax(
                                                                priceOptions.find((option) => option.value === +e.target.value)
                                                            )
                                                        }
                                                    >
                                                        <option value={initialMax.value} disabled={true}>{initialMax.label}</option>
                                                        {priceOptions.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="collapse collapse-plus" >
                                        <input type="checkbox" defaultChecked={filterOpen2 ? true : false} onClick={() => setFilterOpen2(!filterOpen2)} />
                                        <div className="collapse-title text-sm font-semibold border-b border-b-gray-200">
                                            Brand
                                            <div className='py-2'>

                                            </div>
                                        </div>
                                        <div className={`collapse-content py-2 overflow-y-auto ${filterOpen2 ? "h-64" : ""}`}>
                                            <div className='py-2 relative inline-flex w-full items-center'>
                                                <input type="text" onChange={(e) => setSearchBrand(e.target.value)} className='border w-full px-4 py-2 placeholder:text-sm font-normal outline-none focus:outline' placeholder='Search by Brand' />
                                                <span className='absolute right-2'><HiMiniMagnifyingGlass /></span>
                                            </div>
                                            {
                                                demoBrandList.map(brand => <label key={brand?.id} className="cursor-pointer label relative" onClick={() => setSelectedBrand([...selectedBrand, brand?.Brand])}>
                                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedBrand.find(br => br === brand?.Brand) ? true : false} />
                                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">{brand?.Brand}</span>
                                                </label>)
                                            }
                                        </div>
                                    </div>


                                    <div className="collapse collapse-plus" >
                                        <input type="checkbox" defaultChecked={filterOpen3 ? true : false} onClick={() => setFilterOpen3(!filterOpen3)} />
                                        <div className="collapse-title text-sm font-semibold border-b border-b-gray-200">
                                            Availability
                                        </div>
                                        <div className="collapse-content py-2">
                                            <label className="cursor-pointer label relative" onClick={() => setAvailability([...selectedAvailability, "In Stock"])}>
                                                <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedAvailability.find(able => able === "In Stock") ? true : false} />
                                                <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">In Stock</span>
                                            </label>
                                            <label className="cursor-pointer label relative" onClick={() => setAvailability([...selectedRating, "3 Days"])}>
                                                <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(able => able === "3 Days") ? true : false} />
                                                <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Up to 3 days</span>
                                            </label>

                                            <label className="cursor-pointer label relative" onClick={() => setAvailability([...selectedRating, "5 Days"])}>
                                                <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(able => able === "5 Days") ? true : false} />
                                                <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Up to 5 days</span>
                                            </label>

                                            <label className="cursor-pointer label relative" onClick={() => setAvailability([...selectedRating, "7 Days"])}>
                                                <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(able => able === "7 Days") ? true : false} />
                                                <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Up to 7 days</span>
                                            </label>

                                            <label className="cursor-pointer label relative" onClick={() => setAvailability([...selectedRating, "12 Days"])}>
                                                <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(able => able === "12 Days") ? true : false} />
                                                <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Up to 12 days</span>
                                            </label>

                                            <label className="cursor-pointer label relative" onClick={() => setAvailability([...selectedRating, "15 Days"])}>
                                                <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(able => able === "15 Days") ? true : false} />
                                                <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Up to 15 days</span>
                                            </label>

                                        </div>
                                    </div>


                                    <div className="collapse collapse-plus" >
                                        <input type="checkbox" defaultChecked={filterOpen4 ? true : false} onClick={() => setFilterOpen4(!filterOpen4)} />
                                        <div className="collapse-title text-sm font-semibold border-b border-b-gray-200">
                                            Rating
                                        </div>
                                        <div className="collapse-content py-2">
                                            <label className="cursor-pointer label relative" onClick={() => setRating([...selectedRating, 4])}>
                                                <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(rat => rat === 4) ? true : false} />
                                                <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm"><span>4</span> <HiStar className='h-5 w-5 text-yellow-400' /> <span> and up</span></span>
                                            </label>
                                            <label className="cursor-pointer label relative" onClick={() => setRating([...selectedRating, 3])}>
                                                <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(rat => rat === 3) ? true : false} />
                                                <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm"><span>3</span> <HiStar className='h-5 w-5 text-yellow-400' /> <span> and up</span></span>
                                            </label>
                                            <label className="cursor-pointer label relative" onClick={() => setRating([...selectedRating, 2])}>
                                                <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(rat => rat === 2) ? true : false} />
                                                <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm"><span>2</span> <HiStar className='h-5 w-5 text-yellow-400' /> <span> and up</span></span>
                                            </label>
                                            <label className="cursor-pointer label relative" onClick={() => setRating([...selectedRating, 1])}>
                                                <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(rat => rat === 1) ? true : false} />
                                                <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm"><span>1</span> <HiStar className='h-5 w-5 text-yellow-400' /> <span> and up</span></span>
                                            </label>
                                        </div>
                                    </div>


                                    <div className="collapse collapse-plus" >
                                        <input type="checkbox" defaultChecked={filterOpen5 ? true : false} onClick={() => setFilterOpen5(!filterOpen5)} />
                                        <div className="collapse-title text-sm font-semibold">
                                            Deal
                                        </div>
                                        <div className="collapse-content py-2">
                                            <label className="cursor-pointer label relative" onChange={() => setDeals([...selectedDeals, "Featured Deals"])}>
                                                <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(deal => deal === "Featured Deals") ? true : false} />
                                                <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Featured Deals</span>
                                            </label>
                                            <label className="cursor-pointer label relative" onChange={() => setDeals([...selectedDeals, "Bundle Deals"])}>
                                                <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(deal => deal === "Bundle Deals") ? true : false} />
                                                <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Bundle Deals</span>
                                            </label>
                                            <label className="cursor-pointer label relative" onChange={() => setDeals([...selectedDeals, "App Only Deals"])}>
                                                <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(deal => deal === "App Only Deals") ? true : false} />
                                                <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">App Only Deals</span>
                                            </label>
                                            <label className="cursor-pointer label relative" onChange={() => setDeals([...selectedDeals, "Daily Deals"])}>
                                                <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(deal => deal === "Daily Deals") ? true : false} />
                                                <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Daily Deals</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </ul>
                    </div>
                </div>


                <div className='view-container'>
                    {
                        view === "grid" ? <button onClick={() => setView("list")} className={`${view === "grid" ? "bg-gray-300" : "bg-transparent"} py-2 px-4`}><img src="data:image/svg+xml,%3Csvg version=%221.1%22 viewBox=%220 0 17 13%22 xmlns=%22http://www.w3.org/2000/svg%22 width=%2218%22 height=%2218%22%3E%3Cpath d=%22m0 6h5v-6h-5v6zm0 7h5v-6h-5v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5v-6h-5v6zm6-6v6h5v-6h-5z%22 fill=%22rgb(112,112,114)%22/%3E%3C/svg%3E" alt="Grid View" className='w-6' /></button> : <button onClick={() => setView("grid")} className={`${view === "list" ? "bg-gray-300" : "bg-transparent"} py-2 px-4`}><img src="data:image/svg+xml,%3Csvg version=%221.1%22 viewBox=%220 0 17 14%22 xmlns=%22http://www.w3.org/2000/svg%22 width=%2218%22 height=%2218%22%3E%3Cpath d=%22m0 9h4v-4h-4v4zm0 5h4v-4h-4v4zm0-10h4v-4h-4v4zm5 5h12v-4h-12v4zm0 5h12v-4h-12v4zm0-14v4h12v-4h-12z%22 fill=%22rgb(112,112,114)%22/%3E%3C/svg%3E" alt="List View" className='w-6' /></button>
                    }

                </div>

            </div>

            <div className='banner p-2 z-0'>
                <img src="https://static.takealot.com/images/sda/sda-fb-lg.png" alt="Banner" className='h-32' />
            </div>

            <div className='flex items-start justify-center gap-5 my-10 p-2'>
                <div className='hidden lg:block lg:w-2/6'>
                    <div className='category-list bg-white shadow w-full rounded'>
                        <p className='font-semibold text-black px-3 pt-4 pb-3 border-b text-[14px]'>Refine by Category</p>

                        <Link to="/all" className='  text-primary font-normal text-[14px] inline-block w-full px-3 py-2 bg-primary bg-opacity-10'>All Category</Link>

                        <ul className='w-full'>
                            {/* <li>
    <Link to="/all/books" className='py-3 px-7 text-black font-normal text-[14px] inline-block w-full hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-all duration-500'>Books</Link>
</li> */}
                            {
                                categoryList.slice(0, showList ? categoryList.length : 4).map(listItem => <li key={listItem?.id}>
                                    <Link to={listItem?.path} className='py-3 px-7 text-black font-normal text-[14px] inline-block w-full hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-all duration-500'>{listItem?.category}</Link>
                                </li>)
                            }
                            {
                                showList ? <li onClick={() => setShowList(!showList)}>
                                    <button className='text-left py-3 px-7 font-normal text-[12px] inline-block w-full text-primary hover:bg-primary hover:bg-opacity-10 transition-all duration-500'>Show less</button>
                                </li> : <li onClick={() => setShowList(!showList)}>
                                    <button className='text-left py-3 px-7 font-normal text-[12px] inline-block w-full text-primary hover:bg-primary hover:bg-opacity-10 transition-all duration-500'>Show more</button>
                                </li>
                            }
                        </ul>

                    </div>

                    <div className='bg-white my-3 shadow rounded'>
                        <p className='font-semibold text-black px-3 pt-4 pb-3 border-b text-[14px]'>Filter</p>

                        <div className="collapse collapse-plus" >
                            <input type="checkbox" defaultChecked={filterOpen1 ? true : false} onClick={() => setFilterOpen1(!filterOpen1)} />
                            <div className="collapse-title text-sm font-semibold border-b border-b-gray-200">
                                Price
                            </div>
                            <div className="collapse-content py-2">
                                <div>

                                    <div className="chart bg-gray-100 rounded">
                                    <canvas id="mobile-chart" />
                                    </div>

                                    <div className="range-selector">
                                        <Slider
                                            min={150}
                                            max={50000}
                                            value={[range.min, range.max]}
                                            onChange={(newValues) => handleRangeChange({ min: newValues[0], max: newValues[1] })}
                                            range
                                        />
                                    </div>

                                    <div className="dropdowns w-full inline-flex items-center justify-around pt-2">
                                        <select className='border px-2 py-2 rounded bg-gray-100 text-xs font-semibold'
                                            value={selectedMin.value}
                                            onChange={(e) =>
                                                setSelectedMin(
                                                    priceOptions.find((option) => option.value === +e.target.value)
                                                )
                                            }
                                        >
                                            <option value={initialMin.value} disabled={true}>{initialMin.label}</option>
                                            {priceOptions.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>

                                        <select className='border px-2 py-2 rounded bg-gray-100 text-xs font-semibold'
                                            value={selectedMax.value}
                                            onChange={(e) =>
                                                setSelectedMax(
                                                    priceOptions.find((option) => option.value === +e.target.value)
                                                )
                                            }
                                        >
                                            <option value={initialMax.value} disabled={true}>{initialMax.label}</option>
                                            {priceOptions.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="collapse collapse-plus" >
                            <input type="checkbox" defaultChecked={filterOpen2 ? true : false} onClick={() => setFilterOpen2(!filterOpen2)} />
                            <div className="collapse-title text-sm font-semibold border-b border-b-gray-200">
                                Brand
                                <div className='py-2'>

                                </div>
                            </div>
                            <div className={`collapse-content py-2 overflow-y-auto ${filterOpen2 ? "h-64" : ""}`}>
                                <div className='py-2 relative inline-flex w-full items-center'>
                                    <input type="text" onChange={(e) => setSearchBrand(e.target.value)} className='border w-full px-4 py-2 placeholder:text-sm font-normal outline-none focus:outline' placeholder='Search by Brand' />
                                    <span className='absolute right-2'><HiMiniMagnifyingGlass /></span>
                                </div>
                                {
                                    demoBrandList.map(brand => <label key={brand?.id} className="cursor-pointer label relative" onClick={() => setSelectedBrand([...selectedBrand, brand?.Brand])}>
                                        <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedBrand.find(br => br === brand?.Brand) ? true : false} />
                                        <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">{brand?.Brand}</span>
                                    </label>)
                                }
                            </div>
                        </div>


                        <div className="collapse collapse-plus" >
                            <input type="checkbox" defaultChecked={filterOpen3 ? true : false} onClick={() => setFilterOpen3(!filterOpen3)} />
                            <div className="collapse-title text-sm font-semibold border-b border-b-gray-200">
                                Availability
                            </div>
                            <div className="collapse-content py-2">
                                <label className="cursor-pointer label relative" onClick={() => setAvailability([...selectedAvailability, "In Stock"])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedAvailability.find(able => able === "In Stock") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">In Stock</span>
                                </label>
                                <label className="cursor-pointer label relative" onClick={() => setAvailability([...selectedRating, "3 Days"])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(able => able === "3 Days") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Up to 3 days</span>
                                </label>

                                <label className="cursor-pointer label relative" onClick={() => setAvailability([...selectedRating, "5 Days"])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(able => able === "5 Days") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Up to 5 days</span>
                                </label>

                                <label className="cursor-pointer label relative" onClick={() => setAvailability([...selectedRating, "7 Days"])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(able => able === "7 Days") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Up to 7 days</span>
                                </label>

                                <label className="cursor-pointer label relative" onClick={() => setAvailability([...selectedRating, "12 Days"])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(able => able === "12 Days") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Up to 12 days</span>
                                </label>

                                <label className="cursor-pointer label relative" onClick={() => setAvailability([...selectedRating, "15 Days"])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(able => able === "15 Days") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Up to 15 days</span>
                                </label>

                            </div>
                        </div>


                        <div className="collapse collapse-plus" >
                            <input type="checkbox" defaultChecked={filterOpen4 ? true : false} onClick={() => setFilterOpen4(!filterOpen4)} />
                            <div className="collapse-title text-sm font-semibold border-b border-b-gray-200">
                                Rating
                            </div>
                            <div className="collapse-content py-2">
                                <label className="cursor-pointer label relative" onClick={() => setRating([...selectedRating, 4])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(rat => rat === 4) ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm"><span>4</span> <HiStar className='h-5 w-5 text-yellow-400' /> <span> and up</span></span>
                                </label>
                                <label className="cursor-pointer label relative" onClick={() => setRating([...selectedRating, 3])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(rat => rat === 3) ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm"><span>3</span> <HiStar className='h-5 w-5 text-yellow-400' /> <span> and up</span></span>
                                </label>
                                <label className="cursor-pointer label relative" onClick={() => setRating([...selectedRating, 2])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(rat => rat === 2) ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm"><span>2</span> <HiStar className='h-5 w-5 text-yellow-400' /> <span> and up</span></span>
                                </label>
                                <label className="cursor-pointer label relative" onClick={() => setRating([...selectedRating, 1])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(rat => rat === 1) ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm"><span>1</span> <HiStar className='h-5 w-5 text-yellow-400' /> <span> and up</span></span>
                                </label>
                            </div>
                        </div>


                        <div className="collapse collapse-plus" >
                            <input type="checkbox" defaultChecked={filterOpen5 ? true : false} onClick={() => setFilterOpen5(!filterOpen5)} />
                            <div className="collapse-title text-sm font-semibold">
                                Deal
                            </div>
                            <div className="collapse-content py-2">
                                <label className="cursor-pointer label relative" onClick={() => setDeals([...selectedDeals, "Featured Deals"])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(deal => deal === "Featured Deals") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Featured Deals</span>
                                </label>
                                <label className="cursor-pointer label relative" onClick={() => setDeals([...selectedDeals, "Bundle Deals"])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(deal => deal === "Bundle Deals") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Bundle Deals</span>
                                </label>
                                <label className="cursor-pointer label relative" onClick={() => setDeals([...selectedDeals, "App Only Deals"])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(deal => deal === "App Only Deals") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">App Only Deals</span>
                                </label>
                                <label className="cursor-pointer label relative" onClick={() => setDeals([...selectedDeals, "Daily Deals"])}>
                                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={selectedRating.find(deal => deal === "Daily Deals") ? true : false} />
                                    <span className="label-text absolute left-10 inline-flex items-center gap-1 text-sm">Daily Deals</span>
                                </label>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='w-full px-2'>

                    <div className='w-full mb-5 flex flex-row items-center justify-between'>
                        <div className='text-sm font-medium text-gray-600'>
                            <p>{totalProducts}+ result</p>
                        </div>

                        <div className='hidden lg:block justify-end'>
                            <div className='flex items-center gap-5'>
                                <div className='sort-menu'>
                                    <span className=' text-[13px] font-medium'>Sort by:</span>
                                    <select className='border px-2 py-2 rounded bg-white text-xs font-semibold'
                                        onChange={(e) => setSelectedSort([...selectedSort,e.target.value])}

                                    >
                                        <option defaultValue="Relevance">Relevance</option>
                                        <option value="Descending">Price: High to Low</option>
                                        <option value="Ascending">Price: Low to High</option>
                                        <option value="New">Newest Arrivals</option>

                                    </select>

                                </div>

                                <div className='inline-flex items-center gap-1'>
                                    <button onClick={() => setView("grid")} className={`${view === "grid" ? "bg-gray-300" : "bg-transparent"} p-2`}><img src="data:image/svg+xml,%3Csvg version=%221.1%22 viewBox=%220 0 17 13%22 xmlns=%22http://www.w3.org/2000/svg%22 width=%2218%22 height=%2218%22%3E%3Cpath d=%22m0 6h5v-6h-5v6zm0 7h5v-6h-5v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5v-6h-5v6zm6-6v6h5v-6h-5z%22 fill=%22rgb(112,112,114)%22/%3E%3C/svg%3E" alt="Grid View" className='w-6' /></button>
                                    <button onClick={() => setView("list")} className={`${view === "list" ? "bg-gray-300" : "bg-transparent"} p-2`}><img src="data:image/svg+xml,%3Csvg version=%221.1%22 viewBox=%220 0 17 14%22 xmlns=%22http://www.w3.org/2000/svg%22 width=%2218%22 height=%2218%22%3E%3Cpath d=%22m0 9h4v-4h-4v4zm0 5h4v-4h-4v4zm0-10h4v-4h-4v4zm5 5h12v-4h-12v4zm0 5h12v-4h-12v4zm0-14v4h12v-4h-12z%22 fill=%22rgb(112,112,114)%22/%3E%3C/svg%3E" alt="List View" className='w-6' /></button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={`product-container w-full grid ${view === "grid" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"} items-center justify-center gap-5 overflow-hidden`}>
                        {
                            products?.map(prod => <Product
                                prod={prod}
                                key={prod?._id}
                                view={view}
                            ></Product>)
                        }
                    </div>





                    <div className="pagination inline-flex items-center justify-center w-full my-10">
                        {currentPage > 5 && (
                            <button onClick={() => handlePageChange(currentPage - 5)} className='border border-primary rounded-md hover:bg-primary hover:text-white font-semibold px-3 py-1 inline-flex items-center gap-1 mr-2'><HiMiniChevronDoubleLeft className='h-6 w-6' /> <span>prev</span></button>
                        )}

                        {Array.from({ length: pageRangeEnd - pageRangeStart + 1 }).map((_, index) => {
                            const page = pageRangeStart + index;
                            return (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`border py-1 px-3 mr-2 rounded-md hover:bg-primary hover:text-white font-semibold my-5 ${page === currentPage ? "bg-primary text-white" : ""
                                        }`}
                                >
                                    {page}
                                </button>
                            );
                        })}

                        {currentPage < totalPage - 4 && (
                            <button onClick={() => handlePageChange(currentPage + 5)} className='border border-primary rounded-md hover:bg-primary hover:text-white font-semibold px-3 py-1 inline-flex items-center gap-1'><span>Next</span> <HiMiniChevronDoubleRight className='h-6 w-6' /></button>
                        )}
                    </div>


                </div>
            </div>



        </section>
    );
};

export default AllProducts;
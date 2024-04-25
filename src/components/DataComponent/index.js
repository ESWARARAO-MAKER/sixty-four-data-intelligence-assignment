import { countries, libraryData, releasesData } from '../../data'
import { MainNavbar } from '../MainNavbar'
import './index.css'
import { PiNoteDuotone } from "react-icons/pi";
import Dataitems from '../Dataitems';

export const DataComponent = () => {
    const libraryItemColors = ["red", "green", "blue", "orange", "aqua"]
    return(
        <div className='whole-data-container'>
            <MainNavbar/>
            <ul className='library-cards-container'>
                {libraryData.map((each, id) => (
                    <li className='library-card' key={id}>
                        <span className='library-icon' style={{color: libraryItemColors[id]}}><PiNoteDuotone/></span>
                        <span>{each.library}</span>
                        <small>{each.date}</small>
                    </li>
                ))}
            </ul>
            <div className='plans-recent-releases-container'>
                <Dataitems/>
                <div className='recent-release-containers'>
                    <div className='countries'>
                        <span className='release'>Recent Releases</span>
                        <select name='India' className='select'>
                            {
                                countries.map(each => (
                                    <option value={each}>{each}</option>
                                ))
                            }
                        </select>
                    </div>
                    <hr className='hr'/>
                    <ul className="timeline">
                        {
                            releasesData.map(each => (
                                <li className="timeline-item">
                                    <div className="timeline-break"></div>
                                    <div className="timeline-content">
                                        <div className="timeline-date">{each.date}</div>
                                        <div className="timeline-desc">{each.desc}</div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>   
        </div>
    )
}
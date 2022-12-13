import { useState } from 'react'
import Accordion from './Accordion'
import Checkbox from './Checkbox'
import UserCard from "./extras/UserCard"

/**    background-color: hsl(0deg, 0%, 14%);
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 2rem; */
const Extras = () => {

    return (
        <div className="extras">
            <UserCard/>
            <div>
            <Accordion name="Attachments">
                    <p>No Attachment</p>
                </Accordion>
                <Accordion name="Links">
                    <p>No Links</p>
                </Accordion>
                <Accordion name="Appointments">
                    <div className="checkboard">
                    <span className="appt">
                    <Checkbox/>
                        <div>
                            <label htmlFor="">Interview with CTO</label>
                            <label htmlFor="">Sep 20, 2022, 10:30 AM</label>
                        </div>
                    </span>
                    <span className="appt">
                    <Checkbox/>
                        <div>
                            <label htmlFor="">Interview with CTO</label>
                            <label htmlFor="">Sep 20, 2022, 10:30 AM</label>
                        </div>
                    </span>
                    <span className="appt">
                        <Checkbox/>
                        <div>
                            <label htmlFor="">Interview with CTO</label>
                            <label htmlFor="">Sep 20, 2022, 10:30 AM</label>
                        </div>
                    </span>
                    </div>
                </Accordion>
            </div>
        </div>
    )
}

export default Extras
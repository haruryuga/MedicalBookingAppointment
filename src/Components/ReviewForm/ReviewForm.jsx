import { Table, Button } from 'react-bootstrap';
import "reactjs-popup/dist/index.css";
import SubmitReview from './SubmitReview';
import React, { useState } from 'react';

export default function ReviewForm() {
    const [reviews, setReviews] = useState("")

    const handleReview = function (review) {
        setReviews(review);
    }
    console.log(reviews)

    return (
        <div style={{ margin: "auto", maxWidth: "800px", marginTop: "10%" }}>
            <h2 style={{ marginBottom: "10px" }}>Reviews</h2>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Doctor Name</th>
                        <th>Doctor Speciality</th>
                        <th>Provide Feedback</th>
                        <th>Review Given</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Dr. John Doe</td>
                        <td>Cardiology</td>
                        <td>
                            {<SubmitReview />}
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Dr. Mary Watson</td>
                        <td>Orthopedy</td>
                        <td>
                            {<SubmitReview />}
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Dr. Albert Einstein</td>
                        <td>Dermatology</td>
                        <td>              </td>
                  
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Dr. Thomas Edison</td>
                        <td>General Specialist</td>
                        <td>
                            
                            <Button variant="primary" disabled size='sm'>Review Submitted</Button>
                        </td>
                  
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
// import React, { Component } from "react";
// // import { Field, reduxForm } from "redux-form";
// import "../scss/components/_dashboard.scss";

// export class AddAppForm extends Component {
// 	onSubmit(values) {
// 		console.log(values);
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<main role="main">
// 					<header>
// 						<h1>Create Application</h1>
// 						<p>
// 							Derived from the CollegeBoard&reg; College
// 							Application Checklist
// 						</p>
// 					</header>
// 					{/*<form
// 						{onSubmit={this.props.handleSubmit(values =>
// 							this.onSubmit(values)
// 						)}}
// 					>*/}
// 						<table className="table">
// 							<thead>
// 								<tr>
// 									<th>University Details</th>
// 								</tr>
// 							</thead>
// 							<tbody>
// 								<tr>
// 									<td width="50%">
// 										<label htmlFor="university-name">
// 											University Name:
// 										</label>
// 									</td>
// 									<td>
// 										<Field
// 											name="university-name"
// 											component="input"
// 											type="text"
// 										/>
// 									</td>
// 								</tr>
// 								<tr>
// 									<td>
// 										<label htmlFor="app-due-date">
// 											Application Due Date:
// 										</label>
// 									</td>
// 									<td>
// 										<Field
// 											name="app-due-date"
// 											component="input"
// 											type="date"
// 										/>
// 									</td>
// 								</tr>
// 								<tr>
// 									<td>
// 										<label htmlFor="admission-types">
// 											Admission Type:
// 										</label>
// 									</td>
// 									<td>
// 										<Field
// 											name="admission-types"
// 											component="select"
// 											type="select"
// 										>
// 											<option value="regular">
// 												Regular Admission
// 											</option>
// 											<option value="rolling">
// 												Rolling Admission
// 											</option>
// 											<option value="open">
// 												Open Admission
// 											</option>
// 											<option value="early-action">
// 												Early Action
// 											</option>
// 											<option value="early-decision">
// 												Early Decision
// 											</option>
// 											<option value="early-evaluation">
// 												Early Evaluation
// 											</option>
// 										</Field>
// 									</td>
// 								</tr>
// 							</tbody>
// 						</table>

// 						<table className="table">
// 							<thead>
// 								<tr>
// 									<th width="50%">Transcripts</th>
// 									<th>Test Scores</th>
// 								</tr>
// 							</thead>
// 							<tbody>
// 								<tr>
// 									<td>
// 										<Field
// 											name="hs-transcript-sent"
// 											component="input"
// 											type="checkbox"
// 										/>
// 										<label htmlFor="hs-transcript-sent">
// 											High School Transcript Sent
// 										</label>
// 										<br />
// 										<Field
// 											name="mid-transcript-sent"
// 											component="input"
// 											type="checkbox"
// 										/>
// 										<label htmlFor="mid-transcript-sent">
// 											Midyear Transcript Sent
// 										</label>
// 									</td>

// 									<td>
// 										<Field
// 											name="SAT-sent"
// 											component="input"
// 											type="checkbox"
// 										/>
// 										<label htmlFor="SAT-sent">
// 											SAT Scores Sent
// 										</label>
// 										<br />
// 										<Field
// 											name="SAT-subject-sent"
// 											component="input"
// 											type="checkbox"
// 										/>
// 										<label htmlFor="SAT-subject-sent">
// 											SAT Subject Scores Sent
// 										</label>
// 										<br />
// 										<Field
// 											name="AP-sent"
// 											component="input"
// 											type="checkbox"
// 										/>
// 										<label htmlFor="AP-sent">
// 											AP Scores Sent
// 										</label>
// 										<br />
// 									</td>
// 								</tr>
// 							</tbody>
// 						</table>
// 						<table className="table">
// 							<thead>
// 								<tr>
// 									<th width="50%">Recommendation Letters</th>
// 									<th>Interviews</th>
// 								</tr>
// 							</thead>
// 							<tbody>
// 								<tr>
// 									<td>
// 										<Field
// 											name="recommendation-requested"
// 											component="input"
// 											type="checkbox"
// 										/>
// 										<label htmlFor="recommendation-requested">
// 											Recommendation Letters Requested
// 										</label>
// 										<br />
// 										<Field
// 											name="recommendation-submitted"
// 											component="input"
// 											type="checkbox"
// 										/>
// 										<label htmlFor="recommendation-submitted">
// 											Recommendation Letters Submitted
// 										</label>
// 										<br />
// 										<Field
// 											name="recommendation-thanks"
// 											component="input"
// 											type="checkbox"
// 										/>
// 										<label htmlFor="recommendation-thanks">
// 											Thank You Cards Sent
// 										</label>
// 										<br />
// 									</td>
// 									<td>
// 										<Field
// 											name="interview-prep"
// 											component="input"
// 											type="checkbox"
// 										/>
// 										<label htmlFor="interview-prep">
// 											Preparing for Interview(s)
// 										</label>
// 										<br />
// 										<Field
// 											name="interview-complete"
// 											component="input"
// 											type="checkbox"
// 										/>
// 										<label htmlFor="interview-complete">
// 											Interview(s) Complete
// 										</label>
// 										<br />
// 										<Field
// 											name="interview-thanks"
// 											component="input"
// 											type="checkbox"
// 										/>
// 										<label htmlFor="interview-thanks">
// 											Thank You Notes Sent
// 										</label>
// 										<br />
// 										<Field
// 											name="interview-na"
// 											component="input"
// 											type="checkbox"
// 										/>
// 										<label htmlFor="interview-na">
// 											Not Applicable/Not Needed
// 										</label>
// 									</td>
// 								</tr>
// 							</tbody>
// 						</table>
// 						<table className="table">
// 							<thead>
// 								<tr>
// 									<th>Essays</th>
// 								</tr>
// 							</thead>
// 							<tbody>
// 								<tr>
// 									<td width="50%">
// 										<label htmlFor="essay-select">
// 											How far along are your essays?
// 										</label>
// 									</td>
// 									<td>
// 										<Field
// 											name="essays"
// 											component="select"
// 											type="select"
// 										>
// 											<option value="draft">
// 												Draft initial essay(s)
// 											</option>
// 											<option value="proofread-initial">
// 												Proofread essay(s)
// 											</option>
// 											<option value="reader">
// 												Have two people read your
// 												essay(s)
// 											</option>
// 											<option value="revise">
// 												Revise your essay(s)
// 											</option>
// 											<option value="proofread-final">
// 												Proofread your revision
// 											</option>
// 											<option value="not-needed">
// 												No Essay Needed
// 											</option>
// 										</Field>
// 									</td>
// 								</tr>
// 							</tbody>
// 						</table>
// 						<table className="table">
// 							<thead>
// 								<tr>
// 									<th>Financials</th>
// 								</tr>
// 							</thead>
// 							<tbody>
// 								<tr>
// 									<td width="50%">
// 										<label htmlFor="financial-aid-date">
// 											Financial Aid Application Deadline
// 											(FAFSA)
// 										</label>
// 									</td>
// 									<td>
// 										<Field
// 											name="financial-aid-date"
// 											component="input"
// 											type="date"
// 										/>
// 									</td>
// 								</tr>
// 								<tr>
// 									<td colSpan="2">
// 										<Field
// 											name="FAFSA-complete"
// 											component="input"
// 											type="checkbox"
// 										/>
// 										<label htmlFor="FAFSA-complete">
// 											FAFSA Complete
// 										</label>
// 										<br />
// 										<Field
// 											name="CSS-complete"
// 											component="input"
// 											type="checkbox"
// 										/>
// 										<label htmlFor="CSS-complete">
// 											CSS Complete
// 										</label>
// 										<br />
// 										<Field
// 											name="application-fees-paid"
// 											component="input"
// 											type="checkbox"
// 										/>
// 										<label htmlFor="application-fees-paid">
// 											Application Fees Paid
// 										</label>
// 									</td>
// 								</tr>
// 							</tbody>
// 						</table>
// 						<div className="button-container">
// 							<button
// 								type="submit"
// 								disabled={
// 									this.props.pristine || this.props.submitting
// 								}
// 							>
// 								Submit
// 							</button>
// 							<button
// 								type="reset"
// 								disabled={
// 									this.props.pristine || this.props.submitting
// 								}
// 							>
// 								Reset
// 							</button>
// 						</div>
// 			{/*		</form>*/}
// 				</main>
// 			</div>
// 		);
// 	}
// }

// // AddAppForm = reduxForm({
// // 	form: "add-app"
// // })(AddAppForm);

// export default AddAppForm;

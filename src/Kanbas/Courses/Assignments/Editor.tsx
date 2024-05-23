export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><strong>Assignment Name</strong></label><br /><br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" rows={10} cols={50}>
The assignment is available online. Submit a link to the landing page of your web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br /><br />
            <table>
                <tbody>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input id="wd-points" type="number" value={100} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}><br /></td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-group">Assignment Group</label>
                        </td>
                        <td>
                            <select id="wd-group">
                                <option>ASSIGNMENTS</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}><br /></td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-display-grade-as">Display Grade as</label>
                        </td>
                        <td>
                            <select id="wd-display-grade-as">
                                <option>Percentage</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}><br /></td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-submission-type">Submission Type</label>
                        </td>
                        <td>
                            <select id="wd-submission-type">
                                <option>Online</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}><br /></td>
                    </tr>
                    <tr>
                        <td align="right" valign="top"></td>
                        <td>
                            <label><strong>Online Entry Options</strong></label><br />
                            <input type="checkbox" id="wd-text-entry" /> <label htmlFor="wd-text-entry">Text Entry</label><br />
                            <input type="checkbox" id="wd-website-url" /> <label htmlFor="wd-website-url">Website URL</label><br />
                            <input type="checkbox" id="wd-media-recordings" /> <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                            <input type="checkbox" id="wd-student-annotation" /> <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                            <input type="checkbox" id="wd-file-upload" /> <label htmlFor="wd-file-upload">File Uploads</label>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}><br /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <label htmlFor="wd-assign-to"><strong>Assign to</strong></label><br />
                            <input id="wd-assign-to" value="Everyone" style={{ marginBottom: '10px' }} />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <label htmlFor="wd-due-date">Due</label><br />
                            <input type="date" id="wd-due-date" value="2024-05-13" style={{ marginBottom: '10px' }} />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style={{ display: 'flex', alignItems: 'center' }}>
                            <div>
                                <label htmlFor="wd-available-from">Available from</label><br />
                                <input type="date" id="wd-available-from" value="2024-05-06" />
                            </div>
                            <div style={{ marginLeft: '5px' }}>
                                <label htmlFor="wd-available-until">Until</label><br />
                                <input type="date" id="wd-available-until" value="2024-05-20" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style={{ textAlign: 'right', paddingTop: '10px' }}>
                            <button id="wd-cancel" style={{ marginRight: '10px' }}>Cancel</button>
                            <button id="wd-save">Save</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}















































  
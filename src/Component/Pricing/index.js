import React from "react";

const Pricing = () => {
    return (
        <div className="Pricing">
            <h2>Tumbuh lebih baik dengan pilihan yang tepat</h2>
            <h4>Bayar apa yang anda butuhkan</h4>

            <table className="table-feature">
                <tr className="table-list-feature-title">
                    <td colSpan={1}></td>
                    <td>
                        <h5>Basic</h5>
                    </td>
                    <td>
                        <h5>Business</h5>
                    </td>
                    <td class="table-feature-enterprise">
                        <h5>Enterprise</h5>
                    </td>
                </tr>
                <tr>
                    <td className="feature-list">Record In / Out Item</td>
                    <td>&#10003;</td>
                    <td>&#10003;</td>
                    <td class="table-feature-enterprise">&#10003;</td>
                </tr>
                <tr>
                    <td className="feature-list">Record Profit</td>
                    <td>&#10003;</td>
                    <td>&#10003;</td>
                    <td class="table-feature-enterprise">&#10003;</td>
                </tr>
                <tr>
                    <td className="feature-list">Chart Analyst</td>
                    <td>&ndash;</td>
                    <td>&#10003;</td>
                    <td class="table-feature-enterprise">&#10003;</td>
                </tr>
                <tr>
                    <td className="feature-list">Support 7/24</td>
                    <td>&ndash;</td>
                    <td>&#10003;</td>
                    <td class="table-feature-enterprise">&#10003;</td>
                </tr>
                <tr>
                    <td className="feature-list">Export Data</td>
                    <td>&ndash;</td>
                    <td>&ndash;</td>
                    <td class="table-feature-enterprise">&#10003;</td>
                </tr>
                <tr>
                    <td className="feature-list">
                        Income Artificial Intelegent Prediction
                    </td>
                    <td>&ndash;</td>
                    <td>&ndash;</td>
                    <td class="table-feature-enterprise">&#10003;</td>
                </tr>
                <tr>
                    <td colSpan={1}></td>
                    <td>
                        <button className="action"> Pilih Plan</button>
                    </td>
                    <td>
                        <button className="action"> Pilih Plan</button>
                    </td>
                    <td class="table-feature-enterprise">
                        <button className="action"> Pilih Plan</button>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default Pricing;

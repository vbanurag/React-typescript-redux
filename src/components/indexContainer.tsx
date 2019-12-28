import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchAllData, handleDeleteItem } from "../actions/thunkActions";

export class item {
    _id: string;
    name: string;
    email: string;
    dob: string;
}

export interface IReduxState {
    items?: Array<item>;
}

interface IIndexProps {
    items?: Array<item>;
    handleDeleteItem?(itemIndex: string): void;
    fetchAllData(): any;
}

interface IIndexState {
}

class IndexComponent extends React.Component<IIndexProps, IIndexState> {

    constructor(props: IIndexProps) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
        this.props.fetchAllData();
    }
    
    render() {
        console.log('his.props.items = ',this.props);
;        return (
            <div>
                <table>
                    {
                        <thead>
                            <tr>
                                {
                                    new Array("", "Id", "Name", "DOB", "").map((th, i) =>
                                        <th key={i}>
                                            {th}
                                        </th>
                                    )
                                }
                            </tr>
                        </thead>
                    }
                    <tbody>
                        {
                            this.props.items.map((item, i) =>
                                <tr key={i}>
                                    {
                                        new Array<number | string | JSX.Element>(
                                            i + 1,
                                            item.name,
                                            item.dob,
                                            <div>
                                                <button onClick={() => this.props.handleDeleteItem(item._id)}>Delete</button>
                                            </div>
                                        ).map((x, ii) =>
                                            <td key={ii}>
                                                {x}
                                            </td>)
                                    }
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = ({items}: IReduxState) => {
    console.log(items, '----in props')
    return {
        items,
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
                fetchAllData,
                handleDeleteItem,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexComponent);
import React from 'react';

export default ({ phone, className } = this.props ) => {
    return (
        <div className={ className }>
            <h3>{ phone.name }</h3>
            <small>{ phone.id }</small>
            <img src={ phone.imageUrl } alt={ phone.name }/>
            <p>{ phone.snippet }</p>
        </div>
    );
};

// class Detail extends Component {
//     render() {
//         const { phone, className } = this.props;
//         return (
//             <div className={ className }>
//                 <h3>{ phone.name }</h3>
//                 <small>{ phone.id }</small>
//                 <img src={ phone.imageUrl } alt={ phone.name }/>
//                 <p>{ phone.snippet }</p>
//             </div>
//         );
//     }
// }
//
// export default Detail;

export default function (React, PropTypes) {

    class RepeatButton extends React.Component {

        static propTypes = {
            onClick: PropTypes.func.isRequired
        };

        render() {
            return (
                <button className="repeat-button" onClick={this.props.onClick}>
                    <svg width="50px" height="50px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>icon-refresh</title>
                        <path className="circle" d="M25,49 C38.254834,49 49,38.254834 49,25 C49,11.745166 38.254834,1 25,1 C11.745166,1 1,11.745166 1,25 C1,38.254834 11.745166,49 25,49 Z"></path>
                        <path className="icon" d="M18.5614697,20.7142857 C19.9494604,18.5378884 22.3766009,17.1715528 25.0501565,17.1715528 C28.3404138,17.1715528 31.2325657,19.2425018 32.2972983,22.2710544 C32.496387,22.8373472 33.1211642,23.1365272 33.6927773,22.9392916 C34.2643905,22.742056 34.5663813,22.1230939 34.3672927,21.5568011 C32.9980844,17.6621901 29.2802438,15 25.0501565,15 C21.9588483,15 19.1227728,16.4218062 17.2857143,18.7432614 L17.2857143,17.2857143 C17.2857143,16.6545317 16.7740397,16.1428571 16.1428571,16.1428571 C15.5116746,16.1428571 15,16.6545317 15,17.2857143 L15,21.8571429 C15,22.4883254 15.5116746,23 16.1428571,23 L20.7142857,23 C21.3454683,23 21.8571429,22.4883254 21.8571429,21.8571429 C21.8571429,21.2259603 21.3454683,20.7142857 20.7142857,20.7142857 L18.5614697,20.7142857 Z M31.3761969,29.2857143 C29.9854759,31.4518959 27.5751479,32.8113671 24.920812,32.8113671 C21.6541167,32.8113671 18.7786055,30.7508991 17.6983533,27.726753 C17.4950287,27.1575496 16.8684071,26.8608163 16.2987548,27.0639807 C15.7291024,27.267145 15.4321351,27.8932728 15.6354597,28.4624762 C17.0245641,32.351248 20.7210621,35 24.920812,35 C28.0304317,35 30.8804739,33.5478124 32.7142857,31.1829141 L32.7142857,32.7142857 C32.7142857,33.3454683 33.2259603,33.8571429 33.8571429,33.8571429 C34.4883254,33.8571429 35,33.3454683 35,32.7142857 L35,28.1428571 C35,27.5116746 34.4883254,27 33.8571429,27 L29.2857143,27 C28.6545317,27 28.1428571,27.5116746 28.1428571,28.1428571 C28.1428571,28.7740397 28.6545317,29.2857143 29.2857143,29.2857143 L31.3761969,29.2857143 Z"></path>
                    </svg>
                </button>
            );
        }

    }

    return RepeatButton;

}

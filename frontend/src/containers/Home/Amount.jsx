import { connect } from 'react-redux';
import { setTxBurnAmount } from '../../actions/tx';
import { validateAmount } from './_validation';
import Button from '../../components/Button';
import Label from '../../components/Label';
import NumberInput from '../../components/NumberInput';
import PropTypes from 'prop-types';
import React from 'react';

const Amount = (props) => {
    const setTxBurnAmount = ({ target: { value } }) => {
        value = value.trim();
        props.setTxBurnAmount({
            value,
            error: validateAmount(value),
        });
    };

    const onClick = () => {
        if (props.accountTokenBalance === props.amount.value) {
            return;
        }

        props.setTxBurnAmount({
            value: props.accountTokenBalance,
            error: new Error(),
        });
    };

    return (
        <>
            <Label
                className="label"
                help={{
                    display: true,
                    title: 'Help',
                }}
                value={'Swap Amount'}/>
            <div className="swap-number-input-amount">
                <NumberInput
                    className="number-input"
                    placeholder={'Enter Amount'}
                    value={props.amount.value}
                    onChange={setTxBurnAmount}
                />
                <Button
                    className={'button-swap-amount-max'}
                    disabled={false}
                    inProgress={false}
                    value={'MAX'}
                    onClick={onClick}
                />
            </div>
        </>
    );
};

Amount.propTypes = {
    accountTokenBalance: PropTypes.string.isRequired,
    amount: PropTypes.shape({
        value: PropTypes.string.isRequired,
        error: PropTypes.shape({
            message: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    setTxBurnAmount: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
    accountTokenBalance: state.account.TOKEN.balance,
    amount: state.tx.burn.amount,
});

const actionsToProps = {
    setTxBurnAmount,
};

export default connect(stateToProps, actionsToProps)(Amount);

import React from 'react';
import { useDispatch } from 'react-redux';

/* Slices */
import { selectSelectedCheckoutValueId, setSelectedCheckoutValueId } from '../../../slices/checkout-slice';
import { selectActiveOffer } from '../../../slices/offers-slice';

/* Styles */
import './price-option-grid.less';

/* UI Components */
import PriceOptionButton from '../price-option-button/price-option-button';

/* Utitlities */
import { AppDispatch } from '../../../store';
import { useAppSelector } from '../../../hooks';
import { getPriceStringFromCents } from '../../../utils/calculations/money';

const PriceGrid: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const selectedCheckoutValueId = useAppSelector(selectSelectedCheckoutValueId);
    const activeOffer = useAppSelector(selectActiveOffer);
    if (!activeOffer) {
        return null;
    }

    const { giftcard_list } = activeOffer;

    const handleClick = (selectedCheckoutValueId: string) => {
        dispatch(setSelectedCheckoutValueId(selectedCheckoutValueId));
    };

    return (
        <>
            <h4>Select Redemption Amount</h4>
            <div className="price-option-grid">
                {giftcard_list.map(({ checkout_value_id, cost_in_cents }) => {
                    return (
                        <PriceOptionButton
                            onClick={() => {
                                handleClick(checkout_value_id);
                            }}
                            isSelected={checkout_value_id === selectedCheckoutValueId}
                            key={checkout_value_id}
                            priceText={getPriceStringFromCents(cost_in_cents)}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default PriceGrid;

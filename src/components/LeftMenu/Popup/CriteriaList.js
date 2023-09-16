import React, { useState, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import {Button, makeStyles} from "@material-ui/core";
import { AppContext } from '../../../App';

const useStyles = makeStyles((theme) => ({
    customButton: {
        padding: '4px 16px 4px 12px',
        backgroundColor: '#008aed',
        borderWidth: '1px',
        borderColor: 'rgb(204, 204, 204)',
        outline: "none",
        borderRadius: '6px',
        borderStyle: 'solid',
        boxShadow: '0 0',
        fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
        textTransform: 'none',
        fontSize: 15,
        color: 'white',
        '&:hover': {
            backgroundColor: '#008aed',
            boxShadow: '0 0',
        },
    },
}))

const ItemType = {
    CRITERIA: 'CRITERIA'
};

const CriteriaItem = ({ criteria, index, moveItem }) => {
    const [, ref] = useDrag({
        type: ItemType.CRITERIA,
        item: { index },
    });

    const [, drop] = useDrop({
        accept: ItemType.CRITERIA,
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveItem(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    return (
        <div ref={(node) => ref(drop(node))} style={{ padding: '8px', marginBottom: '4px' }}>
            <i className="fas fa-grip" style={{marginRight: 0.5 + 'em'}}></i>{criteria.criteriaName}
        </div>
    );
};

const CriteriaList = ({onClose}) => {
    const [criteriaList, setCriteriaList] = useState([
        {
            "criteriaId": 11,
            "criteriaName": "Парки (Парки)",
            "order": 1,
        },
        {
            "criteriaId": 10,
            "criteriaName": "Веселая пятница (Пивнухи, Шаурма)",
            "order": 2,
        },
        {
            "criteriaId": 9,
            "criteriaName": "Парковка (Парковка)",
            "order": 3,
        },
        {
            "criteriaId": 8,
            "criteriaName": "Площадка для собак (Площадка для собак)",
            "order": 4,
        },
        {
            "criteriaId": 7,
            "criteriaName": "Торгово-развлекательные центры (ТРЦ)",
            "order": 5,
        },
        {
            "criteriaId": 6,
            "criteriaName": "Продуктовые магазины (Продукты)",
            "order": 6,
        },
        {
            "criteriaId": 5,
            "criteriaName": "Кафе/Рестораны (Кафе, Рестораны)",
            "order": 7,
        },
        {
            "criteriaId": 4,
            "criteriaName": "Детские социальные объекты (Дет сад, Школа, Детская поликлиника)",
            "order": 8,
        },
        {
            "criteriaId": 3,
            "criteriaName": "Спортивные объекты (Секции, Фитнес)",
            "order": 9,
        },
        {
            "criteriaId": 2,
            "criteriaName": "Транспортная доступность (Наземный транспорт, метро)",
            "order": 10,
        },
        {
            "criteriaId": 1,
            "criteriaName": "Социальные объекты (МФЦ, Поликлиника)",
            "order": 11,
        },
    ]);
    const classes = useStyles();
    const { livingCompounds, setLivingCompounds } = useContext(AppContext);

    const moveItem = (fromIndex, toIndex) => {
        const updatedList = [...criteriaList];
        const [movedItem] = updatedList.splice(fromIndex, 1);
        updatedList.splice(toIndex, 0, movedItem);

        setCriteriaList(updatedList.map((item, index) => ({ ...item, order: index + 1 })));
    };

    const sendCriteriaList = () => {
        fetch('http://localhost:3000/complexes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({orders:criteriaList})
        })
            .then(response => response.json())
            .then(data => setLivingCompounds(data))
            .then(
                // закрыть попап
                onClose()
            )
            .catch(error => console.error('Error sending criteria:', error));
    }

    return (
        <div>
            {criteriaList.map((criteria, index) => (
                <CriteriaItem key={criteria.criteriaId} index={index} criteria={criteria} moveItem={moveItem} />
            ))}
            <div className="update-settings-button-container">
                <Button variant="contained" className={classes.customButton} onClick={() => sendCriteriaList()}>
                    Пересчитать оценки
                </Button>
            </div>
        </div>
    );
};

export default CriteriaList;

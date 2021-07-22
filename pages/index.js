import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';
import Card from './Card';
import data from './API/data.json';

export default class Index extends React.Component {
    static async getInitialProps () {
        return { cards: data }
    }
    render (){
        return (
            <div className={styles.app}>
                <header className={styles.header}>
                    <Link href="/page2">
                        <img src="/logo.png"
                            className={styles.logo} alt="logo"
                        />
                    </Link>
                </header>
                <div className={styles.grid}>
                    {
                        this.props.cards.map((card) => (
                            <Card key={card.id} />
                        ))
                    }
                </div>
            </div>
        )
    }
};
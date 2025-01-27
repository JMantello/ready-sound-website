import React from 'react';
import Package from './Package';
import img from '../../assets/logo.svg';

const Packages = () => {
    // Define your packages data
    const packages = [
        {
            title: 'Standard Event',
            priceRange: '$300-$500',
            description: 'Perfect for speeches, small gatherings, and simple setups.',
            includedItems: [
                '1 Yamaha 10-channel mixer w/ auxiliary cable',
                '2 Yamaha 12" powered monitors w/ stands',
                '2 Shure SM58 vocal microphones w/ stands',
                'All necessary cables and power connections',
            ],
            imgSource: img,
        },
        {
            title: 'Full Sound: DJ/Events',
            priceRange: '$500-$1500',
            description: 'Ideal for DJs, parties, and larger events that need extra punch.',
            includedItems: [
                '1 Yamaha 10-channel mixer w/ auxiliary cable',
                '2 Yamaha 12" powered monitors w/ stands',
                '2 Yamaha 10" powered monitors (stage)',
                '1 Yamaha 15" powered subwoofer',
                '2 Shure SM58 vocal microphones w/ stands',
            ],
            imgSource: img,
        },
        {
            title: 'Full Sound: Live Music',
            priceRange: '$1500-$5000',
            description: 'Designed for bands, live performances, and events that need the full stage experience.',
            includedItems: [
                '1 Allen & Heath 24-channel mixer w/ auxiliary cable and digital effects',
                '2 Yamaha 15" powered monitors w/ stands',
                '2 Yamaha 12" powered monitors (stage)',
                '2 Yamaha 10" powered monitors (stage)',
                '2 Yamaha 15" powered subwoofers',
                '4 Shure SM58 vocal microphones w/ stands',
                '3 Shure SM57 instrument microphones',
                '1 AKG D112 bass instrument microphone',
                '1 AKG drum microphone set',
                '2 Radial DI boxes',
            ],
            imgSource: img,
        },
    ];

    return (
        <section className="packages">
            <h2>Our Packages</h2>
            {packages.map((pkg, index) => (
                <Package
                    key={index}
                    title={pkg.title}
                    priceRange={pkg.priceRange}
                    description={pkg.description}
                    includedItems={pkg.includedItems}
                    imgSource={pkg.imgSource}
                />
            ))}
        </section>
    );
};

export default Packages;
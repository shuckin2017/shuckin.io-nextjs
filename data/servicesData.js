import {
    UilWebGrid,
    UilArrow,
    UilServer,
    UilPen,
} from "@iconscout/react-unicons";

export default function servicesData() {
    return [
        {
            titleFirst: "Frontend",
            titleSecond: "Developer",
            icon: <UilArrow className="services__icon" />,
            elements: [
                {
                    name: "Lorem ipsum dolor sit amet consectetur",
                },
                {
                    name: "Lorem ipsum dolor sit amet consectetur",
                },
                {
                    name: "Lorem ipsum dolor sit amet consectetur",
                },
                {
                    name: "Lorem ipsum dolor sit amet consectetur",
                },
            ],
        },
        {
            titleFirst: "Ui/ Ui",
            titleSecond: "Designer",
            icon: <UilArrow className="services__icon" />,
            elements: [
                {
                    name: "Lorem ipsum dolor sit amet consectetur",
                },
                {
                    name: "Lorem ipsum dolor sit amet consectetur",
                },
                {
                    name: "Lorem ipsum dolor sit amet consectetur",
                },
                {
                    name: "Lorem ipsum dolor sit amet consectetur",
                },
            ],
        },

        {
            titleFirst: "Backend",
            titleSecond: "Developer",
            icon: <UilServer className="services__icon" />,
            elements: [
                {
                    name: "Lorem ipsum dolor sit amet consectetur",
                },
                {
                    name: "Lorem ipsum dolor sit amet consectetur",
                },
                {
                    name: "Lorem ipsum dolor sit amet consectetur",
                },
                {
                    name: "Lorem ipsum dolor sit amet consectetur",
                },
            ],
        },
    ];
}

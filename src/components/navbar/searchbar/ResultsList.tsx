
import data from "./NavigationElements.json"
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function ResultsList(props: { input: string; }) {
    const filteredData = data.filter((el) =>
    {
        if (props.input === '')
        {
            return '';
        }
        else {

            return el.value.toLowerCase().includes(props.input)
        }

    })
    return (
        <ul className='grid-cols-1 gap-3 p-4 justify-center'>
            {
              filteredData.map((item) => (
                <li key={item.id}>
                    <Button variant="link" className="w-full" asChild>
                    <Link to={item.route} className="nav-link">
                      {item.value}
                    </Link>
                    </Button>
                </li>
            ))
            }
        </ul>
    )
}

export default ResultsList;
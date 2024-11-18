// for small screens like mobile phones. 
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (

    <Sheet open={open} onOpenChange={setOpen}>

      {/* This button will trigger open the mobile sheet menu */}
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" >
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[240px] sm:w-[240px]">
        <div className="flex flex-col items-start">
          <Button variant="link"
            onClick={() => {
              setOpen(false);
            }} asChild>
            <Link to="/" className="nav-link">Home</Link>
          </Button>
          <Button variant="link"
            onClick={() => {
              setOpen(false);
            }} asChild>
            <Link to="/about" className="nav-link">About us</Link>
          </Button>
          <Accordion type="single" collapsible className="text-left w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className='items-center'>Dropdown Menu</AccordionTrigger>
              <AccordionContent>
                <ul className='grid-cols-1 gap-1 p-4'>
                  <li >
                    <Button variant="link" 
                    onClick={() => {
                      setOpen(false);
                    }}
                    asChild>
                      <Link to="/about" className="nav-link">About us</Link>
                    </Button>
                  </li>
                  <li >
                    <Button variant="link" 
                    onClick={() => {
                      setOpen(false);
                    }}
                    asChild>
                      <Link to="/about" className="nav-link">About you</Link>
                    </Button>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SheetContent>

    </Sheet>
  );
}
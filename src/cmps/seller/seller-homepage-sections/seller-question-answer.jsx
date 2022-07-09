import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}))

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

export const SellerQuestionAnswer = () => {
    const [expanded, setExpanded] = useState('panel1')

    const handleChange = (panel) => (ev, newExpanded) => {
        ev.stopPropagation()
        setExpanded(newExpanded ? panel : false)
    }

    return (

        <div className="q-a">
            <header>
                <h2>Q&amp;A</h2>
            </header>
            <div className="accordion-q-a">
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>What can I sell?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Be creative! You can offer any service you wish as long as it's legal and complies with our terms. There are over 200 categories you can browse to get ideas.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>How much money can I make?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            It's totally up to you. You can work as much as you want. Many sellers work on Wiserr full time and some keep their 9-5 job while using Wiserr to make extra money.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>How much does it cost</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            It's free to join Wiserr. There is no subscription required or fees to list your services. You keep 80% of each transaction.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                        <Typography>How much time will I need to invest?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            It's very flexible. You need to put in some time and effort in the beginning to learn the marketplace and then you can decide for yourself what amount of work you want to do.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                        <Typography>How do I price my service?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            With Gig Packages, you set your pricing anywhere from $5 - $995 and offer three versions of your service.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                        <Typography>How do I get paid?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Once you complete a buyer's order, the money is transferred to your account. No need to chase clients for payments and wait 60 or 90 days for a check.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}


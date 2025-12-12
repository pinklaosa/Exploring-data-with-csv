import { useState } from 'react';
import { ChevronDown, Calendar, ArrowLeft } from 'lucide-react';

interface FilterPanelProps {
    onDateRangeChange: (start: string, end: string) => void;
    onSamplingChange: (method: 'raw' | 'avg' | 'max' | 'min' | 'first' | 'last') => void;
    onBack: () => void;
}

export default function FilterPanel({
    onDateRangeChange,
    onSamplingChange,
    onBack,
}: FilterPanelProps) {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [samplingMethod, setSamplingMethod] = useState<'raw' | 'avg' | 'max' | 'min' | 'first' | 'last'>('raw');

    const handleSamplingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const method = e.target.value as 'raw' | 'avg' | 'max' | 'min' | 'first' | 'last';
        setSamplingMethod(method);
        onSamplingChange(method);
    };

    const applyDateFilter = () => {
        onDateRangeChange(startDate, endDate);
    };

    return (
        <div className="filter-panel-new">
            <div className="filter-header">
                <button className="back-button" onClick={onBack} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                    <ArrowLeft size={16} />
                </button>
                <ChevronDown size={16} />
                <span>FILTER & CONFIGURE</span>
            </div>
            <div className="filter-controls">
                <div className="filter-group-new">
                    <label>SAMPLING (1 HR)</label>
                    <div className="select-mock" style={{ padding: 0, border: 'none', background: 'transparent' }}>
                        <select
                            value={samplingMethod}
                            onChange={handleSamplingChange}
                            style={{
                                width: '100%',
                                height: '100%',
                                background: '#1e293b',
                                color: 'white',
                                border: '1px solid #334155',
                                borderRadius: '4px',
                                padding: '5px'
                            }}
                        >
                            <option value="raw">Raw</option>
                            <option value="avg">Avg</option>
                            <option value="max">Max</option>
                            <option value="min">Min</option>
                            <option value="first">First</option>
                            <option value="last">Last</option>
                        </select>
                    </div>
                </div>

                <div className="filter-group-new">
                    <label>LOCATION</label>
                    <div className="select-mock">
                        <span>Location</span>
                        <ChevronDown size={14} />
                    </div>
                </div>

                <div className="filter-group-new time-range-group">
                    <label>TIME RANGE</label>
                    <div className="time-range-inputs">
                        <div className="date-input-wrapper">
                            <Calendar size={14} />
                            <input
                                type="datetime-local"
                                value={startDate}
                                onChange={e => setStartDate(e.target.value)}
                                placeholder="Start Date"
                            />
                        </div>
                        <span className="separator">-</span>
                        <div className="date-input-wrapper">
                            <Calendar size={14} />
                            <input
                                type="datetime-local"
                                value={endDate}
                                onChange={e => setEndDate(e.target.value)}
                                placeholder="End Date"
                            />
                        </div>
                    </div>
                </div>

                <div className="filter-group-new">
                    <label>METRIC</label>
                    <div className="select-mock">
                        <span>Metric</span>
                        <ChevronDown size={14} />
                    </div>
                </div>

                <div className="filter-group-new">
                    <label>THRESHOLD</label>
                    <div className="select-mock">
                        <span>20</span>
                        <ChevronDown size={14} />
                    </div>
                </div>

                <div className="filter-group-new">
                    <label>DATA SOURCE</label>
                    <div className="select-mock">
                        <span>Data Source</span>
                        <ChevronDown size={14} />
                    </div>
                </div>

                <div className="filter-actions-new">
                    <button className="apply-btn" onClick={applyDateFilter}>APPLY FILTERS</button>
                </div>
            </div>
        </div>
    );
}

'use client'

import React from 'react'

const techCards = [
  {
    title: 'Data Ingestion & Streaming',
    desc: 'Apache Kafka, Spark Streaming, Airflow, dbt, Fivetran, and resilient real-time CDC microservices pipelines.',
  },
  {
    title: 'Cloud Warehousing & Lakes',
    desc: 'Snowflake, Databricks, Google BigQuery, AWS Redshift, DuckDB, and Apache Iceberg open table formats.',
  },
  {
    title: 'Data Science & Machine Learning',
    desc: 'Python, PyTorch, Scikit-learn, XGBoost, MLflow, Hugging Face transformers, and vector similarity indexes.',
  },
  {
    title: 'Business Intelligence & Dashboards',
    desc: 'Power BI, Tableau, Looker, Apache Superset, Metabase, and custom React/Next.js dynamic data apps.',
  },
]

export default function TechStack() {
  return (
    <section className="py-20 lg:py-24 bg-[#f0f7fd] border-t border-[#dce8f5]" id="technology">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          {/* Black Title with Double Shade Word */}
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight mb-4 text-[#0b192c]">
            Built with Modern{' '}
            <span className="bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6] bg-clip-text text-transparent">
              Data &amp; Analytics
            </span>{' '}
            Technologies
          </h2>
        </div>

        {/* 4 Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-slate-200 rounded-2xl p-7 card-shadow hover:border-[#1f6fb2] hover:shadow-xl hover:shadow-[#1f6fb2]/10 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display font-extrabold text-xl text-[#1f6fb2] mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
